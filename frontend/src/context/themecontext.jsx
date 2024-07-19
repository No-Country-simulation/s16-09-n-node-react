// ThemeContext.js
import { whiteAlpha } from '@clerk/themes/dist/clerk-js/src/ui/foundations';
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeStyles = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme: themeStyles, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
const lightTheme = {
    text: "rgb(87, 87, 88)",
    background: '#f8f9fa', // Fondo Normal
    secondary: '#34e06f', // Secundario Normal
    backgroundSecondary: '#dfe0e1', // Fondo Normal :hover
  };
  
  const darkTheme = {
    text: "white",
    background: '#002c58', // Fondo darker
    secondary: '#007dfa', // Primario Normal
    backgroundSecondary: '#959596', // Fondo Dark :hover
  };
  