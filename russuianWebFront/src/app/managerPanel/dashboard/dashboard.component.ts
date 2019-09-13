import { Component, OnInit } from '@angular/core';
import { postManager } from '../postsManager/Post';
import { PostsService } from 'src/app/posts.service';
import { usersManager } from '../users/usersManager';
import { UsersService } from '../users/users.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private postsService: PostsService, private userService: UsersService,
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

}