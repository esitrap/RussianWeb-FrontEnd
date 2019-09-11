import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() userCreated = new EventEmitter();
  ngOnInit() {

  }
  add() {

    this.userService.addUsers({
      id: null,
      userName: this.username,
      password: this.password,
    }).subscribe(
      user => {
        this.userCreated.emit();
      }
    );
  }
  display: boolean = false;

  showDialog() {
    this.display = true;
  }
}
