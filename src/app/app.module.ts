import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

import { APIService } from './services/api.service';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './post/comment/comment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostPreviewComponent } from './post/post-preview/post-preview.component';
import { HomeComponent } from './home/home.component';
import { PhotoComponent } from './photo/photo.component';
import { ProfileComponent } from './profile/profile.component';
import { AlbumComponent } from './photo/album/album.component';
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentComponent,
    NavbarComponent,
    PostListComponent,
    PostPreviewComponent,
    HomeComponent,
    PhotoComponent,
    ProfileComponent,
    AlbumComponent
  ],
  imports: [
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [APIService],
  bootstrap: [AppComponent],
})
export class AppModule { }
