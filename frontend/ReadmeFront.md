README del Frontend
Visión General del Proyecto
Este repositorio contiene la aplicación frontend para /nombre del proyecto/.

Instalación
Para comenzar con el desarrollo del frontend, clona este repositorio y navega hasta su directorio en tu terminal:

bash
Copiar código
git clone https://github.com/No-Country-simulation/s16-09-n-node-react.git
cd frontend
Instala las dependencias necesarias usando npm:

bash
Copiar código
npm install
Scripts
dev: Ejecuta el servidor de desarrollo usando Vite.

bash
Copiar código
npm run dev
build: Construye el bundle optimizado para producción usando Vite.

bash
Copiar código
npm run build
preview: Previsualiza la versión de producción localmente usando Vite.

bash
Copiar código
npm run preview
Dependencias
El proyecto utiliza las siguientes dependencias:

@reduxjs/toolkit: Redux toolkit para un uso eficiente de Redux.
axios: Cliente HTTP basado en promesas para el navegador y Node.js. 

react: Biblioteca JavaScript para construir interfaces de usuario.

react-dom: Métodos específicos del DOM para React.

react-redux: Enlaces oficiales de React para Redux.

react-router-dom: Enlaces del DOM para React Router.

Dependencias de Desarrollo
@types/react: Definiciones de tipos TypeScript para React.
@types/react-dom: Definiciones de tipos TypeScript para ReactDOM.
@vitejs/plugin-react-swc: Plugin Vite para React utilizando SWC.
vite: Herramienta de próxima generación para el frontend.
Notas
Este proyecto está configurado con Vite como la herramienta de construcción y soporta módulos JavaScript modernos (type: module). Asegúrate de tener una versión de Node.js >= 16.0.0 para garantizar la compatibilidad.
