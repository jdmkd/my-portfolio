import nodemailer from "nodemailer";
import { z } from "zod";
import xss from "xss";

// In-memory rate limiting (Note: In serverless this resets per-instance, but still provides basic throttling per lambda)
const rateLimitMap = new Map();
const RATE_LIMIT_MAX_REQUESTS = 3;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

// Zod Schema for strict validation
const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email format").max(150, "Email is too long"),
  phone: z.string().max(20, "Phone number is too long").optional().nullable(),
  message: z.string().min(1, "Message is required").max(5000, "Message is too long"),
  website: z.string().optional(), // Honeypot
  timestamp: z.number().optional(), // Bot detection
});

export async function POST(req) {
  try {
    // 1. IP-based Rate Limiting
    const ip = req.headers.get("x-forwarded-for") || "unknown_ip";
    const currentTime = Date.now();
    const rateLimitInfo = rateLimitMap.get(ip) || { count: 0, firstRequest: currentTime };

    if (currentTime - rateLimitInfo.firstRequest > RATE_LIMIT_WINDOW_MS) {
      // Reset window
      rateLimitInfo.count = 1;
      rateLimitInfo.firstRequest = currentTime;
    } else {
      rateLimitInfo.count += 1;
    }
    
    rateLimitMap.set(ip, rateLimitInfo);

    if (rateLimitInfo.count > RATE_LIMIT_MAX_REQUESTS) {
      return Response.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    // 2. Parse Payload
    const body = await req.json();

    // 3. Bot Protection: Honeypot & Timestamp
    if (body.website) {
      // If honeypot is filled, it's a bot. Silently return success.
      console.log("Bot detected (Honeypot)");
      return Response.json({ success: true });
    }
    
    if (body.timestamp) {
      const timeDiff = currentTime - body.timestamp;
      if (timeDiff < 2000) {
        // If form was submitted in less than 2 seconds, it's likely a bot. Silently return success.
        console.log("Bot detected (Timestamp)");
        return Response.json({ success: true });
      }
    }

    // 4. Strict Validation with Zod
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      return Response.json({ error: validationResult.error.errors[0].message }, { status: 400 });
    }

    // 5. Sanitization against XSS
    const name = xss(validationResult.data.name);
    const email = validationResult.data.email;
    const phone = validationResult.data.phone ? xss(validationResult.data.phone) : "";
    const message = xss(validationResult.data.message);

    // 6. Send Email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_EMAIL_HOST || "smtp.gmail.com",
      port: process.env.SMTP_EMAIL_PORT || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_EMAIL_USER,
        pass: process.env.SMTP_EMAIL_PASS,
      }
    });

    // Auto-Reply (sent to the user)
    const userMailOptions = {
      from: process.env.SMTP_EMAIL_USER,
      to: email, // Sending to the visitor's email address
      subject: `Thank you for reaching out, ${name}!`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: auto; margin: 0 auto; background-color: #f9fafb; padding: auto">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 40px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
            
            <div style="text-align: center; margin-bottom: 30px;">
              <h2 style="font-size: 20px; font-weight: 600; color: #111827; margin: 0; letter-spacing: -0.5px;">Submission Received</h2>
              <p style="font-size: 14px; color: #6b7280; margin-top: 8px;">We'll get back to you shortly.</p>
            </div>

            <div style="border-top: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb; padding: 24px 0; margin-bottom: 30px;">
              <p style="font-size: 15px; color: #374151; line-height: 1.6; margin-top: 0;">Hi <strong>${name}</strong>,</p>
              <p style="font-size: 15px; color: #374151; line-height: 1.6; margin-bottom: 0;">
                Thank you for getting in touch. We've successfully received your submission and our team will connect with you soon. For your records, here is a copy of your message:
              </p>
            </div>

            <div style="background-color: #f9fafb; border-radius: 6px; padding: 20px; border: 1px solid #f3f4f6; margin-bottom: 30px;">
              <div style="margin-bottom: 16px;">
                <span style="font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Name</span>
                <div style="font-size: 15px; color: #111827; margin-top: 4px;">${name}</div>
              </div>
              <div style="margin-bottom: 16px;">
                <span style="font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Email</span>
                <div style="font-size: 15px; color: #111827; margin-top: 4px;">${email}</div>
              </div>
              <div style="margin-bottom: 16px;">
                <span style="font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Phone</span>
                <div style="font-size: 15px; color: #111827; margin-top: 4px;">${phone || "Not provided"}</div>
              </div>
              <div>
                <span style="font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Message</span>
                <div style="font-size: 15px; color: #111827; margin-top: 4px; line-height: 1.5;">${message.replace(/\n/g, "<br>")}</div>
              </div>
            </div>

            <div style="border-top: 1px solid #e5e7eb; padding-top: 24px;">
              <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
                <tr>
                  <td style="padding-bottom: 12px;">
                    <p style="font-size: 15px; color: #374151; margin: 0 0 4px 0;">Best regards,</p>
                    <p style="font-size: 18px; font-weight: 700; color: #111827; margin: 0;">Dinesh Kumar</p>
                  </td>
                </tr>
                <tr>
                  <td style="font-size: 14px; color: #4b5563; line-height: 1.6; padding-bottom: 16px;">
                    <span style="font-weight: 600; color: #111827;">Email:</span> <a href="mailto:djkumarr9@gmail.com" style="color: #4b5563; text-decoration: none;">djkumarr9@gmail.com</a><br>
                    <span style="font-weight: 600; color: #111827;">Phone:</span> <a href="tel:+916376094539" style="color: #4b5563; text-decoration: none;">+91-6376094539</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://my-portfoliox.vercel.app" style="text-decoration: none; margin-right: 14px; display: inline-block;">
                      <img src="https://img.icons8.com/ios-filled/50/000000/domain.png" alt="Portfolio" width="28" height="28" style="vertical-align: middle; border: none;" />
                    </a>
                    <a href="https://www.linkedin.com/in/dineshkumarx" style="text-decoration: none; margin-right: 14px; display: inline-block;">
                      <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" width="28" height="28" style="vertical-align: middle; border: none;" />
                    </a>
                    <a href="https://github.com/jdmkd" style="text-decoration: none; display: inline-block;">
                      <img src="https://my-portfoliox.vercel.app/assets/tech_skill_Icon/GitHub.svg" alt="GitHub" width="28" height="28" style="vertical-align: middle; border: none;" />
                    </a>
                  </td>
                </tr>
              </table>
            </div>

          </div>
        </div>
        <!-- Anti-trimming invisible string for Gmail -->
        <div style="display:none; white-space:nowrap; font-size:15px; line-height:0; color:#ffffff;">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          ID: ${Date.now()}
        </div>
      `,
    };

    await transporter.sendMail(userMailOptions);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error processing request:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
