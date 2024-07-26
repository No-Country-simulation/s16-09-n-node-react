//======================
// Class Router Error
//======================
export class RouterError extends Error {
  constructor(
    public key: string,
    public message: string,
  ) {
    super(`${key}: ${message}`);
  }
}

export const getInvalid = async () => {
  throw new RouterError('Router error', '💀 Invalid route ☠️.');
};
