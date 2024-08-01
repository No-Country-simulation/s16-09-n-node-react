import { prisma } from '@/config/prisma';

//==================
// Create project
//==================
export const saveRole = async (body: any) => {
  const response = await prisma.role.create({
    data: body,
  });
  return response;
};

//========================
// Get project by value
//========================
export const getRolesBy = async (value: any) => {
  const response = await prisma.role.findMany({
    where: { ...value, isActive: true },
    select: {
      id: true,
      name: true
    },
  });
  return response;
};

//===========================
// Update project by value
//===========================
export const updateRoleBy = async (value: any, body: any) => {
  const response = await prisma.role.update({
    where: { ...value, isActive: true },
    data: { ...body },
    select: {
      id: true,
      name: true,
    },
  });
  return response;
};

//===========================
// Delete project by value
//===========================
export const deleteRoleBy = async (value: any) => {
  const response = await prisma.role.delete({
    where: { ...value, isActive: true },
    select: {
      id: true,
      name: true,
    },
  });
  return response;
};
