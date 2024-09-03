import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  const [isShowmenu, setMenu] = useState(true);

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  const toggleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        isShowmenu,
        toggleMenu,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };
