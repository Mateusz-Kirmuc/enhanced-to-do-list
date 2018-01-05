import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TaskService {
  tasks: Task[] = [];

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  constructor() { }

}
