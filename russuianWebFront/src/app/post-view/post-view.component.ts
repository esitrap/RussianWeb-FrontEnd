import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { postviwer } from './Post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {
  
  posts: postviwer[];
  selected: postviwer;

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.getPostsforviwe();
  }
  getPostsforviwe(): void {
    this.postsService.getPostsforviwe()
      .subscribe(posts => this.posts = posts)
  }
  more() {
    this.router.navigate(['./postviewdetail']);
}
}
