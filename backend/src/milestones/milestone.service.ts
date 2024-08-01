import { MilestoneStatus, Prisma } from '@prisma/client';

import { prisma } from '@/config/prisma';

import { CreateMilestone, UpdateMilestone } from './milestone.schema';

export const createMilestone = async (newMilestone: CreateMilestone) => {
  await prisma.project.findFirstOrThrow({
    where: { id: newMilestone.projectId },
  });
  await findMilestoneNameInProject(newMilestone.projectId, newMilestone.name);

  const status = setMilestoneStatusByDates(
    newMilestone.startDate,
    newMilestone.targetDate,
  );

  await prisma.milestone.create({
    data: {
      ...newMilestone,
      status,
    },
  });
};

export const findProjectMilestones = async (findOptions: {
  projectId: string;
  status?: MilestoneStatus;
  keyword?: string;
}) => {
  await prisma.project.findFirstOrThrow({
    where: { id: findOptions.projectId },
  });
  const milestones = await prisma.milestone.findMany({
    where: {
      ...findOptions,
      name: { contains: findOptions.keyword, mode: 'insensitive' },
    },
    select: {
      id: true,
      name: true,
      startDate: true,
      targetDate: true,
      status: true,
    },
  });
  return Promise.all(
    milestones.map(async (milestone) => {
      const completion = await getMilestoneCompletion(milestone.id);
      console.log(completion);
      return {
        ...milestone,
        completion,
      };
    }),
  );
};

export const updateMilestoneById = async (
  milestoneId: string,
  newMilestoneData: UpdateMilestone,
) => {
  const existingMilestone = await findMilestoneById(milestoneId);
  if (
    newMilestoneData.name &&
    newMilestoneData.name != existingMilestone.name
  ) {
    await findMilestoneNameInProject(
      existingMilestone.projectId,
      newMilestoneData.name,
    );
  }
  const updatedMilestone = await prisma.milestone.update({
    data: newMilestoneData,
    where: { id: milestoneId },
  });
  return updatedMilestone;
};

export const getMilestoneData = async (milestoneId: string) => {
  const milestone = await findMilestoneById(milestoneId, {
    id: true,
    name: true,
    startDate: true,
    description: true,
    status: true,
    targetDate: true,
  });
  const completion = await getMilestoneCompletion(milestoneId);
  return {
    ...milestone,
    completion,
  };
};

const findMilestoneById = async (
  milestoneId: string,
  s: Prisma.MilestoneSelect = { name: true, projectId: true },
) => {
  const milestone = await prisma.milestone.findFirstOrThrow({
    where: { id: milestoneId },
    select: s,
  });
  return milestone;
};

const findMilestoneNameInProject = async (
  projectId: string,
  milestoneName: string,
) => {
  const existingMilestone = await prisma.milestone.findFirst({
    where: {
      name: { equals: milestoneName, mode: 'insensitive' },
      projectId,
    },
  });
  if (existingMilestone) {
    throw {
      message: 'Existing milestone name',
      status: 422,
      at: 'milestone.service/findMilestoneNameInProject',
    };
  }
};

export const setMilestoneStatusByDates = (
  startDate?: Date,
  targetDate?: Date,
): MilestoneStatus => {
  if (targetDate && targetDate < new Date()) {
    return MilestoneStatus.EXPIRED;
  }
  if (startDate && startDate > new Date()) {
    return MilestoneStatus.UPCOMING;
  }
  return MilestoneStatus.OPEN;
};

const getMilestoneCompletion = async (milestoneId: string) => {
  try {
    const [totalTasks, completedTasks] = await Promise.all([
      prisma.task.count({
        where: { milestoneId, isActive: true },
      }),
      prisma.task.count({
        where: {
          milestone: { status: { equals: 'COMPLETED' } },
          isActive: true,
        },
      }),
    ]);

    const completionPercentage =
      totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

    return {
      totalTasks,
      completedTasks,
      completionPercentage,
    };
  } catch (error) {
    throw error;
  }
};

export const isMilestoneInProject = async (
  milestoneId: string,
  projectId: string,
) => {
  try {
    const milestone = await prisma.milestone.findFirst({
      where: { id: milestoneId, projectId },
    });
    if (!milestone) {
      throw { message: 'Forbidden', status: 403 };
    }
  } catch (error) {
    throw error;
  }
};
