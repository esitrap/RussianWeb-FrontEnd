import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/posts.service';
import { postManager } from '../../Post';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  onvan: string;
  tarikheEnteshar: Date;
  kholaseyePost: string;
  matneKamelePost: string;
  @Output() postCreated = new EventEmitter();

  constructor(private postsService: PostsService) { }

  ngOnInit() {

  }

  add() {
    this.postsService.addPosts({
      onvan: this.onvan,
      tarikheEnteshar: this.tarikheEnteshar,
      kholaseyePost: this.kholaseyePost,
      matneKamelePost: this.matneKamelePost
    }).subscribe(
      post => {
        this.postCreated.emit();
      }
    );
  }
  display: boolean = false;

  showDialog() {
    this.display = true;
  }
}
