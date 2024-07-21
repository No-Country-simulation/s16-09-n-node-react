// ThemeContext.js
import { whiteAlpha } from '@clerk/themes/dist/clerk-js/src/ui/foundations';
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeStyles = theme === 'light' ? light : dark;

  return (
    <ThemeContext.Provider value={{ theme: themeStyles, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
const light = {
    text:  "#007dfa",
    background: '#f8f9fa', // Fondo Normal
    secondary: '#34e06f', // Secundario Normal
    backgroundSecondary: '#b0d7fd', // Fondo Normal :hover
    back: "rgb(217, 236, 254)", // primario light hover
    back1: "#c0f5d2", // secundario light active
    titulos: "#007dfa", //textos dark
    subtitulos: "black"
  };
  
  const dark = {
    text: "#e8e8e8", //textos light
    background: '#002c58', // Fondo darker
    secondary: '#007dfa', // Primario Normal
    backgroundSecondary: 'black', // Fondo Dark :hover
    back: "rgb(0, 71, 138)",
   back1: "#004b96", // primario
    titulos: "#ebebec", //textos (alternativo) light
  };
  