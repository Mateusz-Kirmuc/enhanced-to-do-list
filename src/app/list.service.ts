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
    return of(this.lists.find(list => list.id === id))
  }

  constructor() { }
}
