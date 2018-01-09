import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { ListService } from '../list.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists: List[];

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.getLists();
  }

  getLists() {
    this.listService.getLists().subscribe(lists => this.lists = lists);
  }

  addList(listName: string) {
    listName.trim();
    if (!listName) { return; }
    let newList = new List(1, listName, []);
    this.lists.push(newList);
  }

  deleteList(list: List) {
    let index = this.lists.indexOf(list);
    this.lists.splice(index, 1);
  }
}
