import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { usersManager } from '../usersManager';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  @Input() item: usersManager;
  @Output() userEdited = new EventEmitter();
  
  constructor(private userService: UsersService) { }

  ngOnInit() {

  }
  updateUser() {
    this.userService.updateUser(this.item)
      .subscribe(x => {
        this.userEdited.emit();
      })
  }
}
