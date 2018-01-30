import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { List } from './list';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Task } from './task';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ListService {
  private listsUrl = 'api/lists';

  constructor(private http: HttpClient) { }

  getLists(): Observable<List[]> {
    return this.http.get<List[]>(this.listsUrl)
      .pipe(catchError(this.handleError('getLists', [])))
  }

  getList(id: number): Observable<List> {
    const url = `${this.listsUrl}/${id}`;
    return this.http.get<List>(url).pipe(
      catchError(this.handleError<List>(`getHero id=${id}`))
    );
  }

  /** POST: add a new hero to the server */
  addList(list: List): Observable<List> {
    return this.http.post<List>(this.listsUrl, list, httpOptions).pipe(
      catchError(this.handleError<List>('addList'))
    );
  }

  addTaskToList(list: List): Observable<any> {
    return this.http.put(this.listsUrl, list, httpOptions).pipe(
      catchError(this.handleError<any>('addTask'))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
