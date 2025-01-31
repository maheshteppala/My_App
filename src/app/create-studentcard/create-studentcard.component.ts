import { Component } from '@angular/core';
import { StudentcardService } from '../studentcard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-create-studentcard',
  templateUrl: './create-studentcard.component.html',
  styleUrls: ['./create-studentcard.component.css']
})
export class CreateStudentcardComponent {
  id:number=0;
  constructor(private _activatedroute:ActivatedRoute, private _studentcardService:StudentcardService, private _router:Router){
  //Capturing Id with Activated Route
  this._activatedroute.params.subscribe(
    (data:any)=>{
      console.log(data);
      this.id=data.id;

      _studentcardService.getStudentcard(data.id).subscribe(
        (data:any)=>{
          console.log(data);
          this.studentcardForm.patchValue(data);
        }
      )
    }
  )
}
  public studentcardForm:FormGroup= new FormGroup(
    {

      school_logo:new FormControl(),
      school_name:new FormControl(),
      name:new FormControl(),
      phone:new FormControl(),
      dob:new FormControl(),
      city:new FormControl(),
      email:new FormControl(),
      profile_picture:new FormControl(),
      school_city:new FormControl(),
      school_pin:new FormControl(),
    }
  )

  submit(){

    if(this.id){
      this._studentcardService.updateStudentcard(this.id,this.studentcardForm.value).subscribe(
        (data:any)=>{
          alert("Update Successful..!");
          this._router.navigateByUrl("/dashboard/studentcard");
        },(err:any)=>{
          alert("Internal Server Error");
        }
      )
    }else{
      this._studentcardService.createStudentcard(this.studentcardForm.value).subscribe(
        (data:any)=>{
          console.log(data);
          alert("New ID created successfully..!");
          // this._router.navigate(["/studentcard"]);
          this._router.navigateByUrl("/dashboard/studentcard")
        },(error:any)=>{
          alert("Internal Server Error");
        }
       )
    }


    

  }
}
