import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/posts.service';
import { postManager } from '../../Post';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  posts: postManager[]
  onvan: string;
  tarikheEnteshar: Date;
  kholaseyePost: string;
  matneKamelePost: string;

  constructor(private postsService: PostsService) { }

  ngOnInit() {

  }
  setForm(post: postManager): void {
    this.onvan = post.onvan;
    this.kholaseyePost = post.kholaseyePost
    this.tarikheEnteshar = post.tarikheEnteshar
    this.matneKamelePost = post.matneKamelePost
  }
  updatePost() {
    this.postsService.updatePost({ onvan: this.onvan, kholaseyePost: this.kholaseyePost, matneKamelePost: this.matneKamelePost, tarikheEnteshar: this.tarikheEnteshar })
      .subscribe(x => {

      })
  }
}
