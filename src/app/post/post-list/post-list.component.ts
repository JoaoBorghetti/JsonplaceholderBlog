import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from 'src/app/models/post.model';
import { APIService } from 'src/app/services/api.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  Posts? : Observable<PostModel[]>
  constructor(public db: APIService) { 
  }

  ngOnInit(): void {
    this.Posts = this.db.getPosts()
  }
}
