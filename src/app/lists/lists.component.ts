import { Component, OnInit } from '@angular/core';
import { List } from '../list';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists: List[] = [];

  constructor() { }

  ngOnInit() {
  }

  addList(listName: string) {
    listName.trim();
    if (!listName) { return; }
    let newList = new List(listName, []);
    this.lists.push(newList);
  }
  deleteList(list: List) {
    let index = this.lists.indexOf(list);
    this.lists.splice(index, 1);
  }
}
