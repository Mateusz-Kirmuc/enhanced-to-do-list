import { Task } from './task';
export class List {
  name: string;
  tasks: Task[];
  id: number;

  constructor(id: number, name: string, tasks: Task[]) {
    this.name = name;
    this.tasks = tasks;
    this.id = id;
  }
}
