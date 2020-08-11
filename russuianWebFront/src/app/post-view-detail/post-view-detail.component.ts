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
 // images: any[];

  constructor(
    private postsservice: PostsService, private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPostsByOnvan();
   // this.getImages();
  }
  getPostsByOnvan(): void {
    const onvan = this.route.snapshot.paramMap.get('onvan');
    this.postsservice.getPostsByOnvan(onvan)
      .subscribe(post => this.post = post);
    }
//     getImages():void{
//     this.postsservice.getImages().then(ax =>{ 
//       this.ax = ax
// }
    }