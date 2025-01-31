import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task | undefined  {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(title: string , description : string) : Task{
    const newTask : Task = {
        id: uuid(),
        title,
        description,
        status : TaskStatus.OPEN
    }
    this.tasks.push(newTask)
    return newTask;
  }

  updateTaskStatus(id:string , status:TaskStatus) : Task | undefined {
    const task = this.getTaskById(id)
    if(task){
        task.status = status;
    }
    return task;
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
