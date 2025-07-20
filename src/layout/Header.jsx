import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  const links = [
    { id: 1, link: "/", label: "home" },
    { id: 2, link: "/about", label: "about" },
    { id: 3, link: "/projects", label: "projects" },
    { id: 4, link: "/contact", label: "contact" },
  ];

  return (
    <nav className="sticky z-50 flex items-center flex-wrap w-full uppercase justify-center bg-white">
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="px-2 py-2 rounded hover:bg-slate-400"
        >
          <svg
            className="fill-current h-8 w-8"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <ul
        className={`w-full min-h-full z-0 block md:flex md:items-center md:w-auto ${
          isOpen ? "" : "hidden"
        }`}
      >
        {links.map(({ id, link, label }) => (
          <li
            key={id}
            className="block text-center p-2 lg:p-4 font-medium cursor-pointer hover:text-cyan-700 duration-200"
          >
            <NavLink
              to={link}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4 text-cyan-700" : ""
              }
              end={link === "/"}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
