import { Component, OnInit } from '@angular/core';
import { usersManager } from './usersManager';
import { UsersService } from './users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: usersManager[]

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  add(event: string) {
    if (!event) { return; }
    this.userService.addUsers({
      id :'',
      userName: event,
      password: event,
    }).subscribe(
      user => {
        debugger; this.users.push(user);
      }
    );
    deleteUser(this.users: usersManager): void {
      this.user = this.users.filter(u => u !== usersManager);
      this.userService.deleteUser(this.users).subscribe();
    }
  }
}
