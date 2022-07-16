import { Component, OnInit, Inject} from '@angular/core';
import { Genre } from "./entity/genre";
import {MovieService} from "./services/movie.service";

import { Router } from "@angular/router";
@Component({
  selector: 'my-app',
  styles: ["./app.component.scss" ],
  template: require("./app.component.html"),
  
})

 export class AppComponent implements OnInit{
  genre : Genre;
  lienTopMovie: string;
  movieService: MovieService;
  router: Router;
  constructor(@Inject(MovieService) movieService: MovieService, @Inject(Router) router: Router) {
    this.movieService= movieService;
    this.router= router;
    this.movieService.getListGenres();
    this.movieService.gettopMovie();
    this.genre  = JSON.parse(localStorage.getItem('genre'));
    this.lienTopMovie  = localStorage.getItem('lienMovie');
   }
  ngOnInit() {
    console.log("lientop movie"+this.lienTopMovie);
  }

  public gotoMoviesGenre(url, id) {
    this.router.navigate([url, id]).then( (e) => {
      if (e) {
        console.log("Navigation is successful!");
        window.location.reload();
      } else {
        console.log("Navigation has failed!");
      }
    });
}
 }
