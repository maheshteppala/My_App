import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
  constructor(private _vehicleService:VehicleService, private _router:Router){}

  public vehicleForm:FormGroup= new FormGroup(
    {
      Vehicle:new FormControl(),
      manufacturer:new FormControl(),
      model:new FormControl(),
      type:new FormControl(),
      fuel:new FormControl(),
      color:new FormControl(),
      image:new FormControl(),
      cost:new FormControl(),
    }
  )

  create(){
    console.log(this.vehicleForm.value);
    this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
    (data:any)=>{
      console.log(data);
      alert("Vehicle created successfully");
      // this._router.navigate(["/vehicle"]);
      this._router.navigateByUrl("/dashboard/vehicle")
    },(error:any)=>{
      alert("Internal Server Error");
    }
   )

  }
}
