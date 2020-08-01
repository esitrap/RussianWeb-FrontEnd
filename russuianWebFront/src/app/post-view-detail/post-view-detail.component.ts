import { Component, OnInit } from '@angular/core';
import { postviwer } from '../post-view/Post';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-view-detail',
  templateUrl: './post-view-detail.component.html',
  styleUrls: ['./post-view-detail.component.css']
})
export class PostViewDetailComponent implements OnInit {

  post: postviwer;
  constructor(
    private route: ActivatedRoute,
    private postsservice:PostsService,
    ) { }

  ngOnInit():void{
    this.getPostsforviwe();
  }
  getPostsforviwe(): void {
    const onvan = +this.route.snapshot.paramMap.get('onvan');
    this.postsservice.getPostsforviwe(onvan)
      .subscribe(post => this.post = post);
  }

}
