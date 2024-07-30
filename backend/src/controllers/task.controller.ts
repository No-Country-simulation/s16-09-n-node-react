import { Request, Response } from 'express';
import { prisma } from '@/config/prisma';

export const createTask = async (req: Request, res: Response) => {
  const { name, description, dueDate, status, userId, projectId, milestoneId } = req.body;

  try {
    const task = await prisma.task.create({
      data: {
        name,
        description,
        dueDate: dueDate ? new Date(dueDate) : null,
        status,
        userId,
        projectId,
        milestoneId,
      },
    });
    res.status(201).json(task);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getTaskById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const task = await prisma.task.findUnique({
      where: { id },
      include: {
        user: true,
        project: true,
        milestone: true,
      },
    });

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json(task);
  } catch (error) {
    console.error('Error fetching task:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateTaskById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description, dueDate, status, userId, projectId, milestoneId } = req.body;

  try {
    const task = await prisma.task.update({
      where: { id },
      data: {
        name,
        description,
        dueDate: dueDate ? new Date(dueDate) : null,
        status,
        userId,
        projectId,
        milestoneId,
      },
    });

    res.status(200).json(task);
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteTaskById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.task.delete({
      where: { id },
    });

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const listTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await prisma.task.findMany({
      include: {
        user: true,
        project: true,
        milestone: true,
      },
    });

    res.status(200).json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
