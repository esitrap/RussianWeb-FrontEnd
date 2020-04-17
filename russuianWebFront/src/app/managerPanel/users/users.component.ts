import { Component, OnInit } from '@angular/core';
import { usersManager } from './usersManager';
import { UsersService } from './users.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: usersManager[]
  selected: usersManager;
  constructor(private userService: UsersService,
    private location: Location,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }
  confirm(user: usersManager) {
    this.confirmationService.confirm({
      message: 'از انجام عملیات درخواستی مطمئن هستید؟',
      accept: () => {
        this.deleteUser(user);
      },
      reject: () => {

      }
    });
  }
  deleteUser(user: usersManager) {
    this.userService.deleteUser(user)
      .subscribe(x => {
        this.getUsers();
      })
  }
  setForm(user: usersManager): void {
    this.selected = Object.assign({}, user);
    this.showDialog();
  }
  display: boolean = false;

  showDialog() {
    this.display = true;
  }
}
