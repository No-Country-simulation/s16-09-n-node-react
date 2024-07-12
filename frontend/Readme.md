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



## Uso Combinado de TailwindCSS y CSS Puro: Mejores Prácticas

### Resumen
El uso combinado de TailwindCSS y CSS puro ofrece una flexibilidad y eficiencia superiores en el desarrollo de interfaces de usuario. Este documento explora las mejores prácticas para integrar ambas metodologías, destacando cómo se pueden complementar para crear aplicaciones web modernas y mantenibles.

### Introducción
TailwindCSS es un framework de utilidad que permite escribir clases CSS directamente en el HTML, acelerando el desarrollo y manteniendo el CSS gestionable. CSS puro, por otro lado, proporciona un control fino sobre el estilo y es esencial para personalizaciones específicas. La combinación de ambos permite aprovechar las ventajas de TailwindCSS mientras se mantiene la flexibilidad de CSS puro.

### Ventajas de Usar TailwindCSS
- **Desarrollo Rápido:** TailwindCSS proporciona clases utilitarias predefinidas, permitiendo un desarrollo rápido sin necesidad de escribir CSS personalizado para cada componente.
- **Consistencia:** Facilita la creación de interfaces consistentes, ya que todas las utilidades siguen un mismo sistema de diseño.
- **Eficiencia:** Reduce la cantidad de CSS escrito manualmente, lo que puede disminuir el tamaño del archivo CSS final si se purgan las clases no utilizadas.

### Ventajas de Usar CSS Puro
- **Flexibilidad:** Permite personalizar estilos más allá de las capacidades de TailwindCSS.
- **Especificidad:** Facilita el control específico sobre componentes individuales sin necesidad de ajustar las clases utilitarias de TailwindCSS.
- **Compatibilidad:** Ideal para proyectos existentes que ya utilizan CSS puro.

### Mejores Prácticas

#### 1. Configuración Inicial
Configura TailwindCSS en tu proyecto y crea un archivo CSS puro separado para estilos personalizados.

```bash
# Instalación de TailwindCSS
npm install tailwindcss
npx tailwindcss init
```

En tu archivo `tailwind.config.js`, asegúrate de configurar el purgado de CSS para eliminar las clases no utilizadas en producción.

```javascript
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

#### 2. Uso de Clases Utilitarias
Utiliza las clases de TailwindCSS para la mayor parte de tu diseño, reservando el CSS puro para personalizaciones específicas.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="styles/tailwind.css" rel="stylesheet">
  <link href="styles/custom.css" rel="stylesheet">
  <title>Document</title>
</head>
<body class="bg-gray-100">
  <div class="container mx-auto p-4 custom-class">
    <h1 class="text-2xl text-blue-500 custom-heading">Hello, World!</h1>
    <p class="text-base">This is a paragraph styled with Tailwind and custom CSS.</p>
  </div>
</body>
</html>
```

#### 3. Estilos Personalizados
Define estilos personalizados en tu archivo CSS separado. Evita la sobrecarga de estilos comunes que pueden ser manejados por TailwindCSS.

```css
/* custom.css */
.custom-class {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
}

.custom-heading {
  font-family: 'Arial', sans-serif;
  color: #333;
}
```

#### 4. Modularización
Mantén tu CSS modularizado creando archivos CSS separados para componentes o secciones específicas de tu aplicación. Esto mejora la mantenibilidad y facilita las actualizaciones.

```css
/* styles/components/button.css */
.button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
}

.button:hover {
  background-color: #0056b3;
}
```

#### 5. Documentación y Comentarios
Documenta el uso de clases personalizadas y las razones detrás de la elección de CSS puro en lugar de TailwindCSS. Esto ayuda a otros desarrolladores a entender y mantener el código.



### Referencias
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)


