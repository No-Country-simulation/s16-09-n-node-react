import * as jwt from 'jsonwebtoken';

declare module 'jsonwebtoken' {
  export interface JwtPayload {
    userId?: string;
    // Add any other custom properties you need
  }
}
