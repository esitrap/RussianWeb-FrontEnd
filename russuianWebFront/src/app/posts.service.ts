import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './posts/post';
import { Observable ,of } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private postUrl = 'api/Post'

  constructor(private http: HttpClient) { }
  
  
  getPosts(): Observable<Post[]> {
      this.http.get('PostsService')
      return of();
   }
}
