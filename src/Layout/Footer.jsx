const Footer = () => {
  return (
    <div className="bottom-0 w-full flex justify-center bg-slate-700 bg-opacity-30 font-medium text-slate-300 py-2">
      <div className="lg:text-lg pr-4">
        Made with: Vite, React, Tailwind CSS
      </div>{" "}
      <div className="lg:text-base">
        You can find the code of this portfolio{" "}
        <a
          href="https://github.com/SophieH07/portfolio"
          target="_blank"
          className="hover:text-white font-bold"
        >
          here
        </a>{" "}
      </div>
    </div>
  );
};

export default Footer;
