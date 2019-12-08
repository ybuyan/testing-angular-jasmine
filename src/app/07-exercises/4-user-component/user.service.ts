import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

  private readonly URL = 'http://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient
  ) { }

  private getUserUrl(userId: any): string {
    return `${this.URL}/${userId}`;
  }

  getUsers(): Observable<any> {
    return this.http
      .get(this.URL)
      .pipe(
        map((res: any) => res.json())
      );
  }

  getUser(userId: any): Observable<any> {
    return this.http
      .get(this.getUserUrl(userId))
      .pipe(
        map((res: any) => res.json())
      );
  }

  addUser(user: any): Observable<any> {
    return this.http
      .post(this.URL, JSON.stringify(user))
      .pipe(
        map((res: any) => res.json())
      );
  }

  updateUser(user: any): Observable<any> {
    return this.http
      .put(this.getUserUrl(user.id), JSON.stringify(user))
      .pipe(
        map((res: any) => res.json())
      );
  }

  deleteUser(userId: any): Observable<any> {
    return this.http
      .delete(this.getUserUrl(userId))
      .pipe(
        map((res: any) => res.json())
      );
  }
}
