import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentModel } from '../models/comment.model';
import { PostModel } from '../models/post.model';
import { APIService } from '../services/api.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input('post') Post? : PostModel
  Comments? : Observable<CommentModel[]>
  constructor(public db:APIService) {
   }
  ngOnInit(): void {
    if(this.Post){
      this.Comments = this.db.getPostComments(this.Post.id)
    }
  }
}
