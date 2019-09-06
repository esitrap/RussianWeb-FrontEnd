import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { usersManager } from './usersManager';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private userUrl = 'api/Users'
  
  constructor(private http: HttpClient) { }

  getUsers(): Observable<usersManager[]> {
    return this.http.get<usersManager[]>('api/Users')
  }
}
