import { Component, Input, OnInit } from '@angular/core';
import { CommentModel } from 'src/app/models/comment.model';
import { PostModel } from 'src/app/models/post.model';
import { UserModel } from 'src/app/models/user.model';
import { APIService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent implements OnInit {
  @Input('post') post? : PostModel;
  user$? : Observable<UserModel>;
  comments$? : Observable<CommentModel[]>;
  constructor(public db:APIService) {
  }
  ngOnInit(): void {
    if(this.post){
      this.user$ = this.db.getUser(this.post.userId)
      this.comments$ = this.db.getPostComments(this.post.id)
    }
  }
}
