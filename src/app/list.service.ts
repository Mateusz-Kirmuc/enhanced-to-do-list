import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { List } from './list';

@Injectable()
export class ListService {
  lists: List[] = [];

  getLists(): Observable<List[]> {
    return of(this.lists);
  }

  getList(id: number): Observable<List> {
    for (let list of this.lists) {
      if (list.id == id) {
        return of(list);
      }
    }
  }

  constructor() { }
}
