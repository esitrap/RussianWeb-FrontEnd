import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { usersManager } from '../usersManager';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  constructor(private userService: UsersService) { }
  
  users: usersManager[]
  username: string;
  password: string;
  ngOnInit() {
    this.getUsers();
  }
  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }
  add() {

    this.userService.addUsers({
      id: null,
      userName: this.username,
      password: this.password,
    }).subscribe(
      user => {
        this.users.push(user);
      }
    );
  }
}
