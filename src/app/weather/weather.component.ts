import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  weathers:any=[];
  constructor( private _weatherService:WeatherService){
    _weatherService.getWeathers().subscribe(
      (data:any)=>{
        this.weathers[0]=data;
        console.log(this.weathers);
      }
    )
  }
}
