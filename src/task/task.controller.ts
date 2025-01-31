import { Controller, Get, Param } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.model';

@Controller('task')
export class TaskController {
    constructor(private readonly tasksService : TaskService){}

    @Get()
    getAllTasks() : Task[]{
        return this.tasksService.getAllTasks();
    }

    @Get(':id')
    getTaskById(@Param('id') id: string): Task | undefined {
      return this.tasksService.getTaskById(id);
    }
}
