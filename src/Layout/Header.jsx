import React, { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "skills",
    },
    {
      id: 3,
      link: "education",
    },
    {
      id: 4,
      link: "work",
    },
    {
      id: 5,
      link: "language",
    },
    {
      id: 6,
      link: "project",
    },
    {
      id: 7,
      link: "contact",
    },
  ];

  return (
    <nav className="fixed flex items-center flex-wrap w-full uppercase justify-end bg-slate-900 bg-opacity-60 ">
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="px-2 py-2 rounded text-white hover:bg-slate-400 hover:bg-opacity-20"
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
        className={`w-full min-h-full block lg:flex lg:items-center lg:w-auto ${
          isOpen ? "" : "hidden"
        }`}
      >
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="block text-center p-4 font-medium cursor-pointer text-gray-200 hover:text-white duration-200"
          >
            <Link activeClass="active" smooth spy to={link}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
