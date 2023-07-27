import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

export const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];

  return (
    <div className="flex justify-end items-center w-full h-10 px-4 text-white bg-black fixed">
      {mobileNav ? (
        <div>
          <div
            className="cursor-pointer md:hidden text-gray-400 hover:text-white"
            onClick={() => setMobileNav(!mobileNav)}
          >
            <FaBars size={30} />
          </div>
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-3 cursor-pointer text-gray-400 hover:text-white duration-200"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <div
            className="cursor-pointer text-gray-400 hover:text-white"
            onClick={() => setMobileNav(!mobileNav)}
          >
            <FaBars size={30} />
          </div>
          <ul className="flex flex-col items-center absolute top-10 left-0 w-full bg-black">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="py-5 cursor-pointer text-gray-400 hover:text-white duration-200"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
