import { Component,Input, OnInit } from '@angular/core';
import { CommentModel } from 'src/app/models/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input('comment') Comment? : CommentModel
  constructor() { }

  ngOnInit(): void {
  }

}
