import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { MovieGenreComponent } from "./movie_genre/movie_genre.component";
import {APP_BASE_HREF} from '@angular/common';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { MovieModalComponent } from './modal/movie_detail.component';
@NgModule({
  declarations: [
    AppComponent,
    MovieGenreComponent,
    MovieModalComponent
  ],
  imports: [
    YouTubePlayerModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  entryComponents: [MovieModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }