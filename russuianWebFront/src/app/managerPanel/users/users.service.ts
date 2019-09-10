import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usersManager } from './usersManager';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  [x: string]: any;
  private userUrl = 'api/Users'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<usersManager[]> {
    return this.http.get<usersManager[]>('api/Users')
  };
  addUsers(user: usersManager): Observable<any> {
    return this.http.post(this.userUrl, { userName: user.userName, password: user.password })
  };
  deleteUser(user: usersManager) {
    const url = `${this.userUrl}/${user.id}`;
    return this.http.delete(url);
  }
  updateUser(user: usersManager) {
    const url = `${this.userUrl}/${user.id}`;
    return this.http.put(url, user);
  }
}
