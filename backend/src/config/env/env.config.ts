import 'dotenv/config';

export const PORT = +(process.env.PORT ?? 3001);
export const DATABASE_URL = process.env.DATABASE_URL as string;
export const Secret = process.env.JWT_SECRET as string;
export const Expire = process.env.JWT_EXPIRATION as string;
export const Key = process.env.API_KEY as string;
export const HostDev = process.env.HOST_DEV as string;
export const HostProdFront = process.env.HOST_PROD_FRONT as string;
export const HostProdBack = process.env.HOST_PROD_BACK as string;
