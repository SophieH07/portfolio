import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const getInitialTheme = () => {
  try {
    const stored = window.localStorage.getItem("theme");
    return stored === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    try {
      document.body.classList.remove("theme-dark", "theme-light");
      document.body.classList.add(
        theme === "dark" ? "theme-dark" : "theme-light"
      );
      window.localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

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
    <nav className="fixed z-50 flex items-center flex-wrap w-full uppercase justify-end md:justify-center ">
      {/* Theme slider */}
      <div className="absolute left-4 top-2 flex items-center gap-2">
        <span className="text-xs">{theme === "dark" ? "🌙" : "☀️"}</span>
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={theme === "light"}
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hidden"
          />
          <span
            className="w-10 h-5 flex items-center bg-gray-300 rounded-full p-1"
            style={{
              background: theme === "dark" ? "#374554" : "#e34251",
              transition: "background 0.2s",
            }}
          >
            <span
              className="bg-white w-4 h-4 rounded-full shadow-md transform duration-200"
              style={{
                transform:
                  theme === "light" ? "translateX(20px)" : "translateX(0)",
              }}
            ></span>
          </span>
        </label>
      </div>
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
            className="block text-center p-2 lg:p-4 font-medium text-lg cursor-pointer hover:text-[#93e1d8] duration-200"
          >
            <NavLink
              to={link}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4 text-[#93e1d8]" : ""
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
