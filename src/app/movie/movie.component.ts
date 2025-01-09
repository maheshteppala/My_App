import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  movies:any=[];
  constructor( private _movieService:MovieService){
    _movieService.getMovies().subscribe(
      (data:any)=>{
        this.movies=data;
        console.log(this.movies);
      }
    )
  }

  getStar(rating:number){
    return Math.floor(rating);
  }
}
