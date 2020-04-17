import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/posts.service';
import { postManager } from '../Post';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ConfirmationService } from 'primeng/api';



@Component({
  selector: 'app-postsManager',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: postManager[]
  selected: postManager;
  constructor(private postsService: PostsService,
    private location: Location,
    private route: ActivatedRoute, 
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.getPosts();
  }
  getPosts(): void {
    this.postsService.getPosts()
      .subscribe(posts => this.posts = posts)
  }
  confirm(post: postManager) {
    this.confirmationService.confirm({
      message: 'از انجام عملیات درخواستی مطمئن هستید؟',
      accept: () => {
        this.deletePosts(post);
      },
      reject: () => {

      }
    });
  }
  deletePosts(post: postManager) {
    this.postsService.deletePosts(post)
      .subscribe(x => {
        this.getPosts();
      })
  }
  setForm(post: postManager): void {
    this.selected = Object.assign({}, post);
    this.showDialog();
  }
  display: boolean = false;

  showDialog() {
    this.display = true;
  }
}
