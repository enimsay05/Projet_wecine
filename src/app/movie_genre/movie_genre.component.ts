import { Component, OnInit, Inject,ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from "../entity/movie";
import {MovieService} from "../services/movie.service";
import {ModalService} from "../services/modal.service";
@Component({
  selector: 'app-genre-movie',
  template: require('../movie_genre/movie_genre.component.html'),
})
export class MovieGenreComponent implements OnInit {
 movies: Movie;
  movieService: MovieService;
  route : ActivatedRoute;
  modalService:ModalService;
  viewContainerRef: ViewContainerRef;
  constructor(@Inject(MovieService) movieService: MovieService, @Inject(ActivatedRoute) route: ActivatedRoute,
  @Inject(ModalService)  modalService: ModalService,  @Inject(ViewContainerRef) viewContainerRef: ViewContainerRef
  ) {
    this.movieService= movieService;
    this.route= route;
    this.modalService= modalService;
    this.viewContainerRef = viewContainerRef;
   }
  ngOnInit() {
     this.movieService.getmovieGenres(this.route.snapshot.params.movie_id).subscribe((_res:object) => {
      this.movies=_res["results"]
    });
  }

  public openModal(e, modalMovie:Movie): void {
    
    e.preventDefault();
    this.modalService.setRootViewContainerRef(this.viewContainerRef);
    this.modalService.addDynamicComponent(modalMovie);

  }
  
}