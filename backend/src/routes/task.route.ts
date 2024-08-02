import { Router } from 'express';
import {
  createTask,
  getTaskById,
  updateTaskById,
  deleteTaskById,
  listTasks,
} from '@/controllers/task.controller';

export const taskRouter = Router();

taskRouter.post('/', createTask);
taskRouter.get('/:id', getTaskById);
taskRouter.put('/:id', updateTaskById);
taskRouter.delete('/:id', deleteTaskById);
taskRouter.get('/', listTasks);
