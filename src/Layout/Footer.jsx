const Footer = () => {
  return (
    <div className="w-full flex justify-center bg-slate-700 bg-opacity-30 uppercase font-medium text-slate-950 py-2">
      <div className="text-xl pr-4">Made with: Vite, React, Tailwind CSS</div>{" "}
      <div className="text-lg">
        You can find the code of this portfolio{" "}
        <a
          href="https://github.com/SophieH07/portfolio"
          target="_blank"
          className="hover:text-white"
        >
          here
        </a>{" "}
      </div>
    </div>
  );
};

export default Footer;
