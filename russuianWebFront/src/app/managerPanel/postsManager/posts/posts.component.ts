import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/posts.service';
import { postManager } from '../Post';
import { post } from 'selenium-webdriver/http';



@Component({
  selector: 'app-postsManager',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: postManager[]
  onvan : string;
  tarikheEnteshar : Date;
  kholaseyePost : string;
  matneKamelePost : string;

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
  deletePosts(post: postManager) {
    this.postsService.deletePosts(post)
      .subscribe(x => {
        this.getPosts();
      })
    }
  }
