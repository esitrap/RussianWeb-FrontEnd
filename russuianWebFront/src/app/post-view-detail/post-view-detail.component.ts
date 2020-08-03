import { Component, OnInit } from '@angular/core';
import { postviwer } from '../post-view/Post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-view-detail',
  templateUrl: './post-view-detail.component.html',
  styleUrls: ['./post-view-detail.component.css']
})
export class PostViewDetailComponent implements OnInit {

  posts: postviwer[];
  
  constructor(
    private postsservice:PostsService,
    ) { }

  ngOnInit():void{
    this.getPostsforviwe();
  }
  getPostsforviwe(): void {
    this.postsservice.getPostsforviwe()
      .subscribe(posts => this.posts = posts)
  }

}
