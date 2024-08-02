import { createClerkClient } from '@clerk/clerk-sdk-node';

const clerkClient = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
});

export default clerkClient;
