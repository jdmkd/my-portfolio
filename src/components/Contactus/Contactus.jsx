"use client";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Spinner from "../Spinner/Spinner";
import Message from "./Message";

function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState({});

  useEffect(() => {
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
      const Data = {
        to_name: formData.name,
        to_email: formData.email,
        message: formData.message,
        phone: formData.phone,
      };
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;

      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

      const userId = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      emailjs.send(serviceId, templateId, Data, userId).then(
        (response) => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setSuccessMessage({
            type: "success",
            text: "Message sent successfully!",
          });
          setLoading(false);
          setTimeout(() => {
            setSuccessMessage({ type: "", text: "" });
          }, 6000); // Remove success message after 10 seconds
        },
        (error) => {
          setSuccessMessage({
            type: "error",
            text: "Failed to send message. Please try again.",
          });
          setLoading(false);
          setTimeout(() => {
            setSuccessMessage({ type: "", text: "" });
          }, 3000);
        }
      );
    } catch (error) {
      setSuccessMessage({
        type: "error",
        text: "Failed to send message. Please try again.",
      });
      setLoading(false);
      setTimeout(() => {
        setSuccessMessage({ type: "", text: "" });
      }, 3000);
    }
  };

  return (
    <>
      {successMessage ? (
        <Message type={successMessage.type} text={successMessage.text} />
      ) : (
        ""
      )}

      {/* <div className="fixed px-4 py-2 bg-red-600 rounded-md">
        <div>hiiiiii</div>
      </div> */}
      <section className="" id="contact">
        <div className=" ">
          <h3 className="text-[2rem] md:text-[3rem] font-bold flex justify-center">
            Contact
          </h3>
          <div className="w-full my-[1rem] px-[1rem] py-[2rem] flex flex-col sm:px-[2rem] sm:flex-row gap-[4rem] sm:gap-[2rem] md:gap-[3rem] lg:gap-[5rem] xl:gap-[10rem] justify-center">
            <div className="px-[2rem] mt-[2rem] text-white text-[1.2rem] flex flex-col">
              <h4 className="mb-4">Address Info</h4>
              <div className="">
                <div className="flex flex-col gap-2 pb-5">
                  <div className="">
                    <i className="fa fa-envelope-open" aria-hidden="true"></i>
                  </div>
                  <div className="">
                    <h5>Email</h5>
                    <p>
                      <a href="mailto:djkumarr9@gmail.com">
                        {" "}
                        djkumarr9@gmail.com
                      </a>
                    </p>
                  </div>
                  <div className="">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </div>
                  <div className="">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </div>
                  <div className="">
                    <h5>Address</h5>
                    <p>Ahmedabad, Gujarat</p>
                    <p>India.</p>
                  </div>
                </div>

                {/* <section className="px-[1rem] py-[1rem] w-full max-w-[40rem] border border-gray-800 hover:border-gray-600/80 rounded-md bg-slate-900/30">
                  <iframe className="w-full max-w-[40rem]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237767.81579679187!2d72.41493085434342!3d23.02047409962005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e1!3m2!1sen!2sin!4v1720349425140!5m2!1sen!2sin" width="400" height="300" style={{border:0,borderRadius:"4"}}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </section> */}
              </div>
            </div>

            {/* contact form */}
            <div className="px-[2rem] py-[1rem] bg-neutral-900/90 hover:bg-gray-900/70 border rounded-lg shadow-lg border-gray-800/50 text-white flex flex-col justify-center items-center transition-all duration-400 ease-in-out cursor-pointer">
              <h4 className=" text-[1.5rem] pb-[1rem] ">Get In Touch</h4>

              <form onSubmit={handleSubmit} method="post">
                <label className="py-[2rem] pr-[1rem]">
                  <i className="fa mr-2 fa-user" aria-hidden="true"></i> Name
                </label>
                <input
                  className="w-full my-[1rem] px-[1rem] py-[.5rem] border border-gray-500/50 rounded-md text-gray-900 "
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  // pattern="[A-Za-z]"
                  title='This field must be at least "3" characters.'
                  required
                />

                <div className="clearfix"></div>
                <label className="pr-[1rem]">
                  <i
                    className="fas mr-2 fa-envelope-open"
                    aria-hidden="true"
                  ></i>
                  Email
                </label>
                <input
                  className="w-full my-[1rem] px-[1rem] py-[.5rem] border border-gray-500/50 rounded-md text-gray-900"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                  title="This email is not valid."
                  required
                />
                <div className="clearfix"></div>

                <label className="pr-[1rem]">
                  <i className="fas mr-2 fa-phone" aria-hidden="true"></i>Phone
                </label>
                <input
                  className="w-full my-[1rem] px-[1rem] py-[.5rem] border border-gray-500/50 rounded-md text-gray-900"
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  title="This phone number is not valid."
                  required
                />

                <div className="clearfix"></div>

                <label className="pr-[1rem]">
                  <i className="fas mr-2 fa-edit" aria-hidden="true"></i>Message
                </label>
                <textarea
                  className="w-full my-[1rem] px-[1rem] py-[.5rem] border border-gray-500/50 rounded-md text-gray-900"
                  name="message"
                  placeholder="Message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  pattern="[a-zA-Z]+\w+{2,16}"
                  title='This field must be at least "3" characters.'
                ></textarea>
                <div className="clearfix"></div>

                {/* <div className="my-[1rem] py-[.3rem] flex justify-center items-center border border-blue-900/80 rounded-md bg-blue-900/70 hover:bg-blue-900/90 cursor-pointer">
                  <button className="w-full" type="submit">Send</button>
                </div> */}
                <div className="my-[1rem] py-[.5rem] flex justify-center items-center border border-blue-900/80 rounded-md bg-blue-900/70 hover:bg-blue-900/90 cursor-pointer">
                  <button
                    className="w-full flex justify-center items-center"
                    type="submit"
                    disabled={loading} // Disable button while loading
                  >
                    {loading ? (
                      <Spinner size="w-6 h-6" color="border-white" /> // Show spinner while loading
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contactus;
