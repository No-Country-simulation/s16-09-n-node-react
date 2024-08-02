import { Request, Response } from 'express';

import { createUserFromClerk } from './clerk.service';

export const registerUserFromClerk = async (req: Request, res: Response) => {
  try {
    const data = await createUserFromClerk({ auth: req.auth });
    res.cookie('jwt', data, { httpOnly: true, maxAge: 3600000 });
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
