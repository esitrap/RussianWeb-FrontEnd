import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { postManager } from './managerPanel/postsManager/Post';
import { postviewer } from './post-view/Post';




@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private postUrl = 'api/Posts'


  constructor(private http: HttpClient) { }


  getPosts(): Observable<postManager[]> {
    return this.http.get<postManager[]>('api/Posts')
  }
  addPosts(post: postManager): Observable<any> {
    return this.http.post(this.postUrl, post)
  };
  deletePosts(post: postManager) {
    const url = `${this.postUrl}/${post.onvan}`;
    return this.http.delete(url);
  }
  updatePost(post: postManager) {
    const url = `${this.postUrl}/${post.onvan}`;
    return this.http.put(url,post);
  }
   getPostsforviwe(): Observable<postviewer[]> {
     return this.http.get<postviewer[]>('api/Posts')   
   }
   getPostsByOnvan(): Observable<postviewer> {
    return this.http.get<postviewer>('api/Posts')   
  }
}
