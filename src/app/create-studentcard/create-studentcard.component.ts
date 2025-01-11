import { Component } from '@angular/core';
import { StudentcardService } from '../studentcard.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-studentcard',
  templateUrl: './create-studentcard.component.html',
  styleUrls: ['./create-studentcard.component.css']
})
export class CreateStudentcardComponent {
  constructor(private _studentcardService:StudentcardService, private _router:Router){}

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

  create(){
    console.log(this.studentcardForm.value);
    this._studentcardService.createStudentcard(this.studentcardForm.value).subscribe(
    (data:any)=>{
      console.log(data);
      alert("New ID created successfully");
      // this._router.navigate(["/studentcard"]);
      this._router.navigateByUrl("/dashboard/studentcard")
    },(error:any)=>{
      alert("Internal Server Error");
    }
   )

  }
}
