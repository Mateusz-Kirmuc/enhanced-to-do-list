import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable()
export class TaskService {
  tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  constructor() { }

}
