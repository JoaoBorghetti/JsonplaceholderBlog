import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { PostModel } from '../models/post.model';
import { CommentModel } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  url : string = 'https://jsonplaceholder.typicode.com'
  constructor(public http:HttpClient) { }


  getPosts(){
    return this.http.get<PostModel[]>(this.url+'/posts')
  }

  getPost(id:number){
    return this.http.get<PostModel>(this.url+'/posts/'+id)
  }

  getComments(){
    return this.http.get<CommentModel[]>(this.url+'/comments')
  }
  
  getPostComments(postId:number){
    return this.http.get<CommentModel[]>(this.url+'/posts/'+postId+'/comments')
  }

  getComment(id:number){
    return this.http.get<CommentModel>(this.url+'/comments/'+id)
  }
  
}
