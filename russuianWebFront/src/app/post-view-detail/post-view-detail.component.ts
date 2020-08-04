import { Component, OnInit } from '@angular/core';
import { postviewer } from '../post-view/Post';
import { PostsService } from '../posts.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-post-view-detail',
  templateUrl: './post-view-detail.component.html',
  styleUrls: ['./post-view-detail.component.css']
})
export class PostViewDetailComponent implements OnInit {

  post: postviewer;


  constructor(
    private postsservice: PostsService, private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPostsByOnvan();
  }
  getPostsByOnvan(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.post.onvan = paramMap.get('onvan');
    })

  }
}