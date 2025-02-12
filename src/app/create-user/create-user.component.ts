import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { max } from 'rxjs';
import { tcsMail } from '../vehicle-details/validators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  public userForm:FormGroup=new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email,tcsMail]),
    password: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
    mobile: new FormControl('',[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
    address:new FormGroup({
      
    village: new FormControl(''),
    district: new FormControl(''),
    state: new FormControl(''),
    pincode: new FormControl('')
    }),
    type:new FormControl(),
    // busfee:new FormControl(),
    // hostelfee:new FormControl()
    cards:new FormArray([])
  });

  get cardFormArray(){
    return this.userForm.get('cards') as FormArray;

  }

  addcard(){
    this.cardFormArray.push(
      new FormGroup({
        number:new FormControl(),
        expiry:new FormControl(),
        cvv:new FormControl(),
      })
    )
  }

  delete(i:number){
    this.cardFormArray.removeAt(i);
  }

  constructor(){
    this.userForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayscholar'){
          this.userForm.addControl('busfee',new FormControl());
          this.userForm.removeControl('hostelfee');
        }else{
          this.userForm.addControl('hostelfee',new FormControl());
          this.userForm.removeControl('busfee');
        }
      }
    )
  }

  create(){
    console.log(this.userForm);
  }

}
