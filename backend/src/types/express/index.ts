import { LooseAuthProp } from '@clerk/clerk-sdk-node';
import { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request extends LooseAuthProp {
      user: JwtPayload;
    }
  }
}
