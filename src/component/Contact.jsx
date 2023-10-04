const Contact = () => {
  return (
    <section id="contact">
      <div className="text-4xl font-bold uppercase pb-2">Contact Me</div>
      <div className="uppercase grid w-3/4 pt-3 bg-gray-600 bg-opacity-20 p-5 rounded-md shadow-sm space-y-4">
        <form action="#">
          <div>
            <label className="block font-medium pb-2 text-sm text-gray-300 rounded-lg">
              Your email
            </label>
            <input
              type="email"
              id="email"
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
              className="block w-full p-3 bg-white bg-opacity-10 border-gray-600 placeholder-gray-400 text-white focus:border-primary-500 shadow-sm-light rounded-lg"
              placeholder="subject"
              required
            />
          </div>
          <div className="sm:col-span-2 pb-2">
            <label className="block py-2 text-sm font-medium text-gray-300 rounded-lg">
              Your message
            </label>
            <textarea
              id="message"
              rows="8"
              className="block w-full p-3 text-sm bg-white bg-opacity-10 border-gray-600 placeholder-gray-400 text-white focus:border-primary-500 shadow-sm-light rounded-lg"
              placeholder="Ask for my resume..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="p-3 text-sm font-medium text-center text-white bg-slate-700 rounded-lg sm:w-fit bg-primary-600 hover:bg-slate-500 focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
