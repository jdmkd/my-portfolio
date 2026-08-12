"use client";
import { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import Message from "./Message";

function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "", // Honeypot field for bot detection
  });

  const [successMessage, setSuccessMessage] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);
  const [timestamp, setTimestamp] = useState(0);
  const [quote, setQuote] = useState({});

  useEffect(() => {
    setTimestamp(Date.now()); // Record when the component was loaded
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = { ...formData, timestamp };
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          website: "",
        });
        setSuccessMessage({
          type: "success",
          text: "Message sent successfully!",
        });
        setLoading(false);
        setTimeout(() => {
          setSuccessMessage({ type: "", text: "" });
        }, 6000);
      } else {
        const data = await response.json();
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error) {
      setSuccessMessage({
        type: "error",
        text: error.message || "Failed to send message. Please try again.",
      });
      setLoading(false);
      setTimeout(() => {
        setSuccessMessage({ type: "", text: "" });
      }, 3000);
    }
  };

  return (
    <>
      {successMessage.text && (
        <Message type={successMessage.type} text={successMessage.text} />
      )}

      <section
        className="w-full bg-[#030303] border-b border-white/10"
        id="contact"
      >
        {/* Header */}
        <div className="border-b border-white/10 p-8 sm:p-12 bg-[#000000]">
          <span className="text-sm lg:text-base uppercase tracking-widest text-zinc-500 font-bold mb-4 block text-center">
            Connect
          </span>
          <h3 className="text-center text-4xl sm:text-8xl uppercase font-black text-white tracking-tighter">
            Get In Touch.
          </h3>
        </div>

        {/* Content Grid */}
        <div className="w-full flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/10">
          {/* Left: Contact Info */}
          <div className="flex-1 py-8 sm:py-12 lg:py-16 px-6 sm:px-12 flex flex-col justify-center bg-[#030303]">
            <h4 className="text-2xl font-black text-white tracking-tight mb-8">
              Let's build something extraordinary together.
            </h4>

            {/* Contact Info Text */}
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-8 w-full border-b border-white/10 pb-12">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold block mb-2">
                    Email
                  </span>
                  <a
                    href="mailto:djkumarr9@gmail.com"
                    className="text-xl font-medium text-white hover:text-blue-400 transition-colors break-all"
                  >
                    djkumarr9@gmail.com
                  </a>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold block mb-2">
                    Phone
                  </span>
                  <a
                    href="tel:+916376094539"
                    className="text-xl font-medium text-white hover:text-blue-400 transition-colors"
                  >
                    +91-6376094539
                  </a>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold block mb-2">
                    Social Profiles
                  </span>
                  <div className="flex flex-col gap-2 mt-2">
                    <a
                      href="https://github.com/jdmkd"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/dineshkumarx"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-bold tracking-widest uppercase text-zinc-400 hover:text-[#0a66c2] transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://my-portfoliox.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors"
                    >
                      Portfolio
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="flex-1 p-8 sm:p-12 lg:p-16 bg-[#000000]">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 w-full max-w-lg mx-auto"
            >
              {/* Honeypot Field - Hidden from humans, but bots will fill it */}
              <div
                className="absolute opacity-0 -z-50 select-none overflow-hidden h-0 w-0"
                aria-hidden="true"
              >
                <label>Website</label>
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                  Name
                </label>
                <input
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 text-white font-medium outline-none focus:border-white transition-colors rounded-sm"
                  type="text"
                  name="name"
                  placeholder="Don Lee"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                  Email
                </label>
                <input
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 text-white font-medium outline-none focus:border-white transition-colors rounded-sm"
                  type="email"
                  name="email"
                  placeholder="donlee@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                  Phone
                </label>
                <input
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 text-white font-medium outline-none focus:border-white transition-colors rounded-sm"
                  type="text"
                  name="phone"
                  placeholder="+91 00000 00000"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 text-white font-medium outline-none focus:border-white transition-colors rounded-sm min-h-[120px] resize-y"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-4 w-full flex justify-center items-center gap-4 bg-white text-black px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors disabled:opacity-70"
              >
                {loading ? (
                  <Spinner size="w-5 h-5" color="border-black" />
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Brutalist Footer Sign-Off */}
        <div className="w-full bg-[#000000] border-t border-white/10 pt-24 pb-24 px-6 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[100px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.85] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 text-center uppercase tracking-[-0.03em] z-10 w-full px-4">
            CRAFTING<br />DIGITAL<br />
            <span className="text-zinc-600">EXPERIENCES.</span>
          </h1>
        </div>
      </section>
    </>
  );
}

export default Contactus;
