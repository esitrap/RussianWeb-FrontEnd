import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/posts.service';
import { postManager } from '../../Post';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  posts: postManager[]
  onvan: string;
  tarikheEnteshar: Date;
  kholaseyePost: string;
  matneKamelePost: string;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.getPosts();
  }
  getPosts(): void {
    this.postsService.getPosts()
      .subscribe(posts => this.posts = posts)
  }
  add() {
    this.postsService.addPosts({
      onvan : this.onvan,
      tarikheEnteshar : this.tarikheEnteshar,
      kholaseyePost : this.kholaseyePost,
      matneKamelePost : this.matneKamelePost
    }).subscribe(
      post => {
        this.posts.push(post);
      }
    );
  }
}
