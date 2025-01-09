import { Component } from '@angular/core';
import { MyntraService } from '../myntra.service';

@Component({
  selector: 'app-myntra',
  templateUrl: './myntra.component.html',
  styleUrls: ['./myntra.component.css']
})
export class MyntraComponent {
  myntras:any=[];
  constructor( private _myntraService:MyntraService){
    _myntraService.getMyntras().subscribe(
      (data:any)=>{
        this.myntras=data;
        console.log(this.myntras);
      }
    )
  }
}
