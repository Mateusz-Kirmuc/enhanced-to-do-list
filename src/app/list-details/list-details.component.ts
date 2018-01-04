import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {
  tasks: string[] = [];
  constructor() { }

  ngOnInit() {
  }

  addTask(task: string) {
    task.trim();
    if (!task) { return; }
    this.tasks.push(task);
  }

  deleteTask(task: string) {
    let index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }
}
