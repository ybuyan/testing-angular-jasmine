import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class TodoService {

  constructor(
    private http: HttpClient
  ) { }

  add(todo: any): Observable<any> {
    return this.http
      .post('...', todo)
      .pipe(
        map((r: any) => r)
      );
  }

  getTodos(): Observable<any> {
    return this.http
      .get('...')
      .pipe(
        map((r: any) => r)
      );
  }

  getTodosPromise(): Promise<any> {
    return this.http
      .get('...')
      .pipe(
        map((r: any) => r)
      )
      .toPromise();
  }

  delete(id: any): Observable<any> {
    return this.http
      .delete('...')
      .pipe(
        map((r: any) => r)
      );
  }
}
