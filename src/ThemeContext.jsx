import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const getInitialTheme = () => {
  try {
    const stored = window.localStorage.getItem("theme");
    return stored === "light" ? "light" : "dark";
  } catch {
    return "light";
  }
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.body.classList.remove("theme-dark", "theme-light");
    document.body.classList.add(
      theme === "dark" ? "theme-dark" : "theme-light"
    );
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}
