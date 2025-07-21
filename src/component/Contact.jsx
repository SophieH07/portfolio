import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import girlwithlaptop from "../pics/girlwithlaptop.jpg";

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
    <div className="section" id="contact">
      <h2 className="text-4xl font-bold uppercase pb-4">Contact Me</h2>
      <div className={`${emailSent ? "" : "hidden"}`}>
        Thank you for your message!
      </div>
      <div className="grid w-[90vw] justify-center items-center md:grid-cols-2 md:gap-8 text-center md:text-left">
        <div className="flex-1 flex flex-col items-center md:items-end">
          <div className="uppercase grid w-[100%] xl:w-[80%] pt-3 bg-[#e34251] bg-opacity-20 p-5 rounded-md shadow-sm space-y-4 mb-4">
            <form ref={form} onSubmit={sendEmail}>
              <div>
                <label className="block font-medium pb-2 text-sm rounded-lg">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full p-3 bg-white bg-opacity-70 border-gray-600 placeholder-gray-600 text-black focus:border-primary-500 shadow-sm-light rounded-lg"
                  placeholder="name@email.com"
                  required
                />
              </div>
              <div>
                <label className="block py-2 text-sm font-medium   rounded-lg">
                  subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="block w-full p-3 bg-white bg-opacity-70 border-gray-600 placeholder-gray-600 text-black focus:border-primary-500 shadow-sm-light rounded-lg"
                  placeholder="subject"
                  required
                />
              </div>
              <div className="sm:col-span-2 pb-2">
                <label className="block py-2 text-sm font-medium  rounded-lg">
                  message
                </label>
                <textarea
                  id="message"
                  rows="8"
                  name="message"
                  className="block w-full p-3 text-sm bg-white bg-opacity-70 border-gray-600 placeholder-gray-600 text-black focus:border-primary-500 shadow-sm-light rounded-lg"
                  placeholder="Tell me about a job opportunity..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white p-3 text-sm font-medium text-center rounded-lg sm:w-fit bg-secondary hover:bg-opacity-60 focus:ring-primary-800"
              >
                Send message
              </button>
              <p className="text-red-600 pt-2">{error}</p>
            </form>
          </div>
        </div>
        <div className="flex justify-center md:justify-start">
          <div className="laptop-container">
            <img
              src={girlwithlaptop}
              alt="Picture of a girl with laptop"
              className="floating-laptop"
              tabIndex={0}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full font-medium text-slate-600 py-2 text-sm">
        <div className="px-2">Made with: Vite, React, Tailwind CSS</div>{" "}
        <div>
          You can find the code of this portfolio{" "}
          <a
            href="https://github.com/SophieH07/portfolio"
            target="_blank"
            className="hover:text-black font-bold"
          >
            here
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default Contact;
