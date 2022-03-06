import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { PostModel } from '../models/post.model';
import { CommentModel } from '../models/comment.model';
import { UserModel } from '../models/user.model';
import { AlbumModel } from '../models/album.model';
import { PhotoModel } from '../models/photo.model';
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
  getPostComments(postId:number){
    return this.http.get<CommentModel[]>(this.url+'/posts/'+postId+'/comments')
  }

  getUser(id:number){
    return this.http.get<UserModel>(this.url+'/users/'+id)
  }
  getUserPosts(id:number){
    return this.http.get<AlbumModel[]>(this.url+'/users/'+id+'/posts')
  }
  getUserAlbums(id:number){
    return this.http.get<AlbumModel[]>(this.url+'/users/'+id+'/albums')
  }
  getUserTodos(id:number){
    return this.http.get<AlbumModel[]>(this.url+'/users/'+id+'/todos')
  }

  getAlbums(){
    return this.http.get<AlbumModel[]>(this.url+'/albums')
  }
  getAlbumPhotos(id:number){
    return this.http.get<PhotoModel[]>(this.url+'/album/'+id+'/photos')
  }
}
