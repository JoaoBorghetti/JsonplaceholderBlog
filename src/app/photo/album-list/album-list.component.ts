import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumModel } from 'src/app/models/album.model';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums$?: Observable<AlbumModel[]>
  constructor(public db:APIService) { }

  ngOnInit(): void {
    this.albums$ = this.db.getAlbums()
  }

}
