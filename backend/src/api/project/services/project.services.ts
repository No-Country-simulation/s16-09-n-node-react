import { prisma } from '@/config/prisma';

//==================
// Create project
//==================
export const saveProject = async (body: any) => {
  const response = await prisma.project.create({
    data: body,
  });
  return response;
};

//========================
// Get project by value
//========================
export const getProjectsBy = async (value: any) => {
  const response = await prisma.project.findMany({
    where: { ...value },
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
export const updateProjectBy = async (value: any, body: any) => {
  const response = await prisma.project.update({
    where: { ...value },
    data: { ...body },
    select: {
      id: true,
      name: true
    },
  });
  return response;
};

//===========================
// Delete project by value
//===========================
export const deleteProjectBy = async (value: any) => {
  const response = await prisma.project.delete({
    where: { ...value },
    select: {
      id: true,
      name: true
    },
  });
  return response;
};
