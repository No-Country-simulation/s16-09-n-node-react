// src/hooks/useTheme.js
import { useContext } from 'react';
import { ThemeContext } from '../context/themecontext';

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de un ThemeProvider');
  }
  return context;
};

export { useTheme }; // Exporta useTheme de esta manera
