import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import { mainRouter } from './routes';

// Configuración de variables de entorno
dotenv.config();

// Inicialización de la app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());

// Rutas
app.use('/', mainRouter);

// Inicio del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('\n==================================================');
  console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`);
  console.log('==================================================\n');
});
