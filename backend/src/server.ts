import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import { serverRouter } from './routes/server.routes';

// Configuración de variables de entorno
dotenv.config();

// Inicialización de la app
const server = express();
const PORT = process.env.PORT ?? 3000;

// Middleware
server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(morgan('dev'));
server.use(cookieParser());

// Rutas
server.use('/api/v1', serverRouter);

// Inicio del servidor
server.listen(PORT, () => {
  console.log('\n===============================================================');
  console.log(`  🚀 Servidor corriendo en: http://localhost:${PORT}/api/v1/docs`);
  console.log('===============================================================\n');
});
