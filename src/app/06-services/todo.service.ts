import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

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

  delete(id: any): Observable<any> {
    return this.http
      .delete('...')
      .pipe(
        map((r: any) => r)
      );
  }
}
