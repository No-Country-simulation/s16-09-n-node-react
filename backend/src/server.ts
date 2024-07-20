import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import { mainRouter } from './routes';

// Configuración de variables de entorno
dotenv.config();

// Inicialización de la app
const app = express();
const PORT = process.env.PORT ?? 3000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());

// Rutas
app.use('/', mainRouter);

// Inicio del servidor
app.listen(PORT, () => {
  console.log('\n==================================================');
  console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`);
  console.log('==================================================\n');
});
