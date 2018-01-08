import { Task } from './task';
export class List {
  name: string;
  tasks: Task[];

  constructor(name: string, tasks: Task[]) {
    this.name = name;
    this.tasks = tasks;
  }
}
