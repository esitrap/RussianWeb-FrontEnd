import { Component, OnInit } from '@angular/core';
import { usersManager } from '../usersManager';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  users: usersManager[]

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }
  updateUser(user: usersManager) {
    this.userService.updateUser(user)
      .subscribe(x => {
        this.getUsers();
      })
  }
}
