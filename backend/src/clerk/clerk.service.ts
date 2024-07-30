import { LooseAuthProp } from '@clerk/clerk-sdk-node';

import { prisma } from '@/config/prisma';
import { createToken } from '@/utils/token';

import clerkClient from './clerk.config';

//If company "projet" doesnt exists it fails
const DEFAULT_COMPANY_NAME = 'projet';

export const createUserFromClerk = async (authData: LooseAuthProp) => {
  try {
    const userClerkId = authData.auth.userId;
    if (!userClerkId) {
      throw { ok: false, message: 'Clerk error' };
    }
    const clerkUserData = await clerkClient.users.getUser(userClerkId);

    const existingUser = await prisma.user.findFirst({
      where: { email: clerkUserData.emailAddresses[0]?.emailAddress },
    });

    if (existingUser) {
      return createToken(existingUser.id);
    }

    const defaultCompany = await prisma.company.findFirst({
      where: { name: DEFAULT_COMPANY_NAME },
      select: { id: true },
    });
    const newUser = await prisma.user.create({
      data: {
        email: clerkUserData.emailAddresses[0]?.emailAddress as string,
        password: '-',
        name: clerkUserData.firstName,
        lastName: clerkUserData.lastName,
        clerkId: clerkUserData.id,
        companyId: defaultCompany?.id,
      },
    });
    return createToken(newUser.id);
  } catch (error) {
    throw error;
  }
};
