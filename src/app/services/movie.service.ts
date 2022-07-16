import { Injectable, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';
import { Movie } from "../entity/movie";
@Injectable({providedIn: 'root'})
export class MovieService {
  API_URL: string = "https://api.themoviedb.org/3/";
  API_KEY: string = "a2996d45bd6a415fb0355eb14a9b37f1";
  httpClient: HttpClient;
  router: any;
  tiler: string;
  movie: Movie;
  lienMovie :any;
  constructor(@Inject(HttpClient) httpClient: HttpClient , @Inject( Router) router:Router) { 
    this.httpClient = httpClient;
    this.router = Router;
  }

  getListGenres() {
      
    this.httpClient.get(this.API_URL + 'genre/movie/list?api_key=' + this.API_KEY + '&language=en-US').subscribe((_res:object) => localStorage.setItem('genre', JSON.stringify(_res["genres"])), _err => {
      localStorage.setItem('genre', JSON.stringify(_err["genres"]))
   })
   return Array();
  }
  
  getmovieGenres(movie_id: number){
    return this.httpClient.get(this.API_URL + 'discover/movie?api_key=' + this.API_KEY + '&language=en-US&with_genres='+movie_id);
  }
  gettopMovie(){
 this.httpClient.get(this.API_URL + 'movie/top_rated?api_key=' + this.API_KEY + '&language=en-US&page=1').subscribe((_res:object) => this.getvideotopmovie(_res["results"][0]), _err => {
    this.getvideotopmovie(_err["results"][0])
 })
  }
  getvideotopmovie(topMovie : object ) {
    this.httpClient.get(this.API_URL + 'movie/'+topMovie['id']+'/videos?api_key=' + this.API_KEY + '&language=en-US').subscribe((_res:object) =>  localStorage.setItem('lienMovie', _res["results"][0]['key']), _err => {
     localStorage.setItem('lienMovie', _err["results"][0]['key']);
   });}

 getVideoModal(id : number ) {
  return this.httpClient.get(this.API_URL + 'movie/'+id+'/videos?api_key=' + this.API_KEY + '&language=en-US');
  
}
}


