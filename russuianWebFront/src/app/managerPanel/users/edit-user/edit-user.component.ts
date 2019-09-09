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
  id: string;
  username: string;
  password: string;
  constructor(private userService: UsersService) { }

  ngOnInit() {

  }
  setForm(user: usersManager): void {
    this.username = user.userName;
    this.password = user.password;

  }
  updateUser() {
    this.userService.updateUser({id:this.id,userName: this.username, password: this.password})
      .subscribe(x => {

      })
  }
}
