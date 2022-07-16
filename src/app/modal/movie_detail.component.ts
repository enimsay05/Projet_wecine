import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Movie } from '../entity/movie';
import {MovieService} from "../services/movie.service";
@Component({
  selector: 'app-modal',
  template: require('./movie_detail.component.html'),
})

export class MovieModalComponent implements OnInit{
  @Input() modalMovie: Movie;
  @Output() closeModal: EventEmitter<any> = new EventEmitter<any>();
  movieService: MovieService;
  youtube:string;
  constructor(@Inject(MovieService) movieService: MovieService) {
    this.movieService = movieService;
  }
  ngOnInit(): void {
    this.movieService.getVideoModal(this.modalMovie['id']).subscribe((_res:object) =>  this.youtube= _res["results"][0]['key']);
   }

  close(event) { this.closeModal.emit(event); }
}
