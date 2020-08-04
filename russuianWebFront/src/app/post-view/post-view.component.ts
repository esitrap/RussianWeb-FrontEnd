import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { postviewer } from './Post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {
  
  posts: postviewer[];


  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.getPostsforviwe();
  }
  getPostsforviwe(): void {
    this.postsService.getPostsforviwe()
      .subscribe(posts => this.posts = posts)
  }
  more(post: postviewer) {
    this.router.navigate(['./postviewdetail/',post.onvan]);
}
}
