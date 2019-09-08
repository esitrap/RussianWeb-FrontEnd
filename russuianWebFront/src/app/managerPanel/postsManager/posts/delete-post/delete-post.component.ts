import { Component, OnInit } from '@angular/core';
import { postManager } from '../../Post';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {
  posts: postManager[]

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.getPosts();
  }
  getPosts(): void {
    this.postsService.getPosts()
      .subscribe(posts => this.posts = posts)
  }
  deletePosts(post: postManager) {
    this.postsService.deletePosts(post)
      .subscribe(x => {
        this.getPosts();
      })
  }
}
