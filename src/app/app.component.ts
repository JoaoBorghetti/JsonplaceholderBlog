import { Component } from '@angular/core';
import { APIService } from './services/api.service';
import { PostModel } from './models/post.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog';
  posts? : Observable<PostModel[]>
  constructor(public db : APIService){
    this.posts = db.getPosts()
  }
}
