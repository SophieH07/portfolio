import React, { useState } from "react";
import { Link } from "react-scroll";

const Header = ({ isOpen, setIsOpen }) => {
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
      link: "about",
    },
    {
      id: 3,
      link: "project",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <nav className="fixed z-50 flex items-center flex-wrap w-full uppercase justify-center bg-white">
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
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="block text-center p-2 lg:p-4 font-medium cursor-pointer hover:text-cyan-700 duration-200"
          >
            <Link
              activeClass="active"
              smooth
              spy
              to={link}
              onClick={() => setIsOpen(false)}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
