// client/src/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "../assets/styles/theme";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";

const ThemeContext = createContext({ toggleTheme: () => {} });

export const ThemeProviderWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.palette.mode === "light" ? darkTheme : lightTheme
    );
  };

  // Cambiar el atributo data-theme en el body
  useEffect(() => {
    document.body.setAttribute("data-theme", theme.palette.mode);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
