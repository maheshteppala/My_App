import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profiles:any=[];
  constructor( private _profileService:ProfileService){
    _profileService.getProflies().subscribe(
      (data:any)=>{
        this.profiles=data;
        console.log(this.profiles);
      }
    )
  }
}
