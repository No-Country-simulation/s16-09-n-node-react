import express from 'express';

export const homeRouter = express.Router();

homeRouter.get('/', (req, res) => {
  const htmlResponse = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Server is running</title>
    <style>
        body {
        font-family: Arial, sans-serif;
        background-color: #f9fafb; /* Cambiado a un tono más claro */
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        }
        .container {
        max-width: 400px; /* Reducido el ancho máximo del contenedor */
        margin: 20px; /* Espaciado del contenedor */
        background-color: #ffffff; /* Blanco para mayor contraste */
        padding: 40px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra más suave */
        text-align: center;
        }
        h1 {
        color: #333;
        margin-bottom: 20px; /* Espaciado inferior del encabezado */
        }
        p {
        color: #666; /* Texto más oscuro */
        margin-bottom: 0; /* Eliminado el margen inferior del párrafo */
        }
        @keyframes blink {
        0% { opacity: 0; }
        50% { opacity: 1; } /* Cambiado al 50% para un efecto más suave */
        100% { opacity: 0; }
        }
        .blinking-text {
        animation: blink 2s infinite; /* Cambiado a un parpadeo más suave y continuo */
        font-size: 24px; /* Aumentado el tamaño del texto */
        font-weight: bold; /* Texto en negrita */
        color: #007bff; /* Color azul para resaltar */
        }
    </style>
    </head>
    <body>
    <div class="container">
        <h1>Server is running</h1>
        <p>Your Node.js server is up and running!</p>
        <p class="blinking-text">...</p> <!-- Agregado texto parpadeante -->
    </div>
    </body>
    </html>
  `;
  res.send(htmlResponse);
});
