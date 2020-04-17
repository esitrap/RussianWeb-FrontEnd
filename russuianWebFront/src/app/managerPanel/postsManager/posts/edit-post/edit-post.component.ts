import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { PostsService } from 'src/app/posts.service';
import { postManager } from '../../Post';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
 
  @Input() item: postManager;
  @Output() postEdited = new EventEmitter();
  
  constructor(private postsService: PostsService) { }

  ngOnInit() {

  }
  updatePost() {
    this.postsService.updatePost(this.item)
      .subscribe(x => {
        this.postEdited.emit();
      })
  }
}
