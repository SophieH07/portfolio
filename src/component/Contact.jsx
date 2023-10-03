const Contact = () => {
  return (
    <section id="contact" className="container mx-auto pb-20 relative">
      <h2 className="text-4xl tracking-tight font-extrabold text-center text-white">
        Contact Me
      </h2>
      <form
        action="#"
        className="w-1/2 mt-5 bg-gray-600 bg-opacity-20 p-5 rounded-md shadow-sm space-y-4"
      >
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300 rounded-lg">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="block w-full p-2.5 bg-white bg-opacity-10 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light rounded-lg"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium  text-gray-300 rounded-lg">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="block p-3 w-full text-sm bg-white bg-opacity-10 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light rounded-lg"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block mb-2 text-sm font-medium text-gray-300 rounded-lg">
            Your message
          </label>
          <textarea
            id="message"
            rows="6"
            className="block p-2.5 w-full text-sm rounded-lg shadow-sm bg-white bg-opacity-10 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
            placeholder="Ask htmlFor my resume..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="p-3 text-sm font-medium text-center text-white bg-slate-700 rounded-lg sm:w-fit bg-primary-600 hover:bg-slate-500 focus:ring-primary-800"
        >
          Send message
        </button>
      </form>
    </section>
  );
};

export default Contact;
