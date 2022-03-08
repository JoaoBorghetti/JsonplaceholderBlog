import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumModel } from 'src/app/models/album.model';
import { PhotoModel } from 'src/app/models/photo.model';
import { UserModel } from 'src/app/models/user.model';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  @Input('album') album?:AlbumModel
  photos$?:Observable<PhotoModel[]>
  albumUser$?:Observable<UserModel>
  constructor(public db:APIService) { }
  ngOnInit(): void {
    if(this.album){
      this.photos$ = this.db.getAlbumPhotos(this.album.id);
      this.albumUser$ = this.db.getUser(this.album.userId);
    }
  }

}
