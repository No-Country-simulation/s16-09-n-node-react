import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

// Función para verificar la conexión
export const checkConnection = async () => {
  try {
    // Realizar una consulta simple para probar la conexión
    await prisma.$queryRaw`SELECT 1`;
    console.log('Successfully connected to the database');
  } catch (error) {
    console.error('Failed to connect to the database', error);
  }
};

// Ejecutar la función de verificación
checkConnection();
