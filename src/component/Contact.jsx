import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        form.current,
        EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          setEmailSent(true);

          setTimeout(() => {
            setEmailSent(false);
          }, 2000);
        },
        (error) => {
          setError(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <div className="text-4xl font-bold uppercase pb-2">Contact Me</div>
      <div className={`ease-in duration-300 ${emailSent ? "" : "hidden"}`}>
        Thank you for your message!
      </div>

      <div className="uppercase grid w-3/4 pt-3 bg-gray-600 bg-opacity-20 p-5 rounded-md shadow-sm space-y-4">
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label className="block font-medium pb-2 text-sm text-gray-300 rounded-lg">
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full p-3 bg-white bg-opacity-10 border-gray-600 placeholder-gray-400 text-white focus:border-primary-500 shadow-sm-light rounded-lg"
              placeholder="name@email.com"
              required
            />
          </div>
          <div>
            <label className="block py-2 text-sm font-medium  text-gray-300 rounded-lg">
              subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="block w-full p-3 bg-white bg-opacity-10 border-gray-600 placeholder-gray-400 text-white focus:border-primary-500 shadow-sm-light rounded-lg"
              placeholder="subject"
              required
            />
          </div>
          <div className="sm:col-span-2 pb-2">
            <label className="block py-2 text-sm font-medium text-gray-300 rounded-lg">
              message
            </label>
            <textarea
              id="message"
              rows="8"
              name="message"
              className="block w-full p-3 text-sm bg-white bg-opacity-10 border-gray-600 placeholder-gray-400 text-white focus:border-primary-500 shadow-sm-light rounded-lg"
              placeholder="Ask for my resume..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="p-3 text-sm font-medium text-center text-white bg-purple-900 bg-opacity-30 rounded-lg sm:w-fit bg-primary-600 hover:bg-opacity-60 focus:ring-primary-800"
          >
            Send message
          </button>
          <p className="text-red-600 pt-2">{error}</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
