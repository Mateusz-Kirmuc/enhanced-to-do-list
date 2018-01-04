import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {
  tasks: Task[] = [];
  constructor() { }

  ngOnInit() {
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
}
