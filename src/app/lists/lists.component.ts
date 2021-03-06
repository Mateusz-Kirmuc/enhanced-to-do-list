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

  addList(listName: string): void {
    listName = listName.trim();
    if (!listName) { return; }
    // define id of new list
    let id = this.lists.length ? this.lists[this.lists.length - 1].id + 1 : 1;
    this.listService.addList({ id: id, name: listName, tasks: [] } as List)
      .subscribe(list => {
        this.lists.push(list);
      });
  }

  deleteList(list: List) {
    // first, remove selected list from this.lists
    this.lists = this.lists.filter(l => l !== list);
    this.listService.deleteList(list).subscribe();
  }
}
