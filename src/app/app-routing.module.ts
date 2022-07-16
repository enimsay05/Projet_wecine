//import { GenreListComponent } from "./genre/list_genre.component";
import { MovieGenreComponent } from "./movie_genre/movie_genre.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
const routes: Routes = [{path: 'movieGenre' , component: AppComponent ,pathMatch: 'full'},{path: 'movieGenre/:movie_id' , component: MovieGenreComponent, pathMatch: 'full'}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }