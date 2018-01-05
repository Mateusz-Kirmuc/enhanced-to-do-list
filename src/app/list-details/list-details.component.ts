import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import {TaskService} from '../task.service';


@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {
  tasks: Task[];
  list: string = "My first list";
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  addTask(name: string) {
    name.trim();
    if (!name) { return; }
    this.tasks.push(new Task(name));
  }

  deleteTask(task: Task) {
    let index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }

  markAsDone(task: Task) {
    task.done = true;
  }
}
