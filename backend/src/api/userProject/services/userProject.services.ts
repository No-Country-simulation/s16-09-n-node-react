import { prisma } from '@/config/prisma';

//=======================
// Create user project
//=======================
export const saveUserProject = async (body: any) => {
  const response = await prisma.userProject.create({
    data: body,
  });
  return response;
};

//=============================
// Get user project by value
//=============================
export const getUserProjectsBy = async (value: any) => {
  const response = await prisma.userProject.findMany({
    where: { ...value, isActive: true },
    select: {
      id: true,
      userId: true,
      roleId: true,
      projectId: true,
    },
  });
  return response;
};

//================================
// Update user project by value
//================================
export const updateUserProjectBy = async (value: any, body: any) => {
  const response = await prisma.userProject.update({
    where: { ...value, isActive: true },
    data: { ...body },
    select: {
      id: true,
      userId: true,
      roleId: true,
      projectId: true,
    },
  });
  return response;
};

//================================
// Delete user project by value
//================================
export const deleteUserProjectBy = async (value: any) => {
  const response = await prisma.userProject.delete({
    where: { ...value, isActive: true },
    select: {
      id: true,
    },
  });
  return response;
};
