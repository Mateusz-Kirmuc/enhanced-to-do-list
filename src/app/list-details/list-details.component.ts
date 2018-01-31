import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { ListService } from '../list.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { List } from '../list';


@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {
  list: List;

  constructor(
    private listService: ListService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getList();

  }

  getList(): void {
    // get id of list from url
    const id = +this.route.snapshot.paramMap.get('id');
    this.listService.getList(id).subscribe(list => this.list = list);
  }

  addTask(taskName: string): void {
    taskName.trim();
    if (!taskName) { return; }
    // add new task to list
    this.list.tasks.push(new Task(taskName));
    this.listService.addTaskToList(this.list).subscribe();
  }

  deleteTask(task: Task): void {
    // remove selected task from this.list
    let index = this.list.tasks.indexOf(task);
    this.list.tasks.splice(index, 1);

    this.listService.deleteTaskFromList(this.list).subscribe();
  }

  markAsDone(task: Task) {
    // set 'done' parameter of task as true
    let index = this.list.tasks.indexOf(task);
    this.list.tasks[index].done = true;

    this.listService.markTaskFromListAsDone(this.list).subscribe();
  }
  goBack() {
    this.location.back();
  }
}
