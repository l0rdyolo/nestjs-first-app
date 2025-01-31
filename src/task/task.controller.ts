import { Controller, Get, Post, Param, Body, Patch, Delete } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { TaskService } from './task.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TaskService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string): Task | undefined {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body('title') title: string, @Body('description') description: string): Task | undefined{
    return this.tasksService.createTask(title, description);
  }

  @Patch(':id/status')
  updateTaskStatus(@Param('id') id: string, @Body('status') status: TaskStatus): Task | undefined {
    return this.tasksService.updateTaskStatus(id, status);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): void {
    return this.tasksService.deleteTask(id);
  }
}
