// src/context/ThemeContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

const lightTheme = {
  primary: '#007dfa',
  primaryHover: '#0071e1',
  primaryActive: '#0064c8',
  secondary: '#34e06f',
  text: '#141414',
  background: '#e6f2ff',
  // Otros colores claros...
};

const darkTheme = {
  primary: '#005ebc',
  primaryHover: '#004b96',
  primaryActive: '#003870',
  secondary: '#27a853',
  text: '#e8e8e8',
  background: '#141414',
  // Otros colores oscuros...
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const themeStyles = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
