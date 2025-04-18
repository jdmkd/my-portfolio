
// api/send-email.js

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  console.log("handlerhandlerhandlerhandlerhandlerhandler!!!!");
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;
    console.log(" name, email, phone, message ", name, email, phone, message);
    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Replace with your SMTP server
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL, // Replace with your email
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS, // Replace with your email password
      },
    });

    // Send mail with defined transport object
    try {
      let info = await transporter.sendMail({
        from: `"Contact Form" <${email}>`, // sender address
        to: "djkumarr9@gmail.com", // list of receivers
        subject: "Contact Form Submission", // Subject line
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`, // plain text body
        html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`, // html body
      });

      console.log("Message sent: %s", info.messageId);

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email" });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    // res.status(405).end(`Method ${req.method} Not Allowed`);
    res.status(405).json({ message: "Method Not Allowed" });
  }
}