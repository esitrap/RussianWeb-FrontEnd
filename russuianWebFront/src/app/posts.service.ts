import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { post } from '../app/posts/Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
}
