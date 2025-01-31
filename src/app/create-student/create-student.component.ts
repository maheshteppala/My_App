import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  public studentForm:FormGroup=new FormGroup({
    name: new FormControl(),
    fathername: new FormControl(),
    mobile: new FormControl('',[Validators.min(1000000000),Validators.max(9999999999)]),
    email: new FormControl(),
    dob: new FormControl(),
    address: new FormGroup({
      addressline: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl('',[Validators.required,Validators.min(100000),Validators.max(999999)]),
    }),

    type:new FormControl(),
    marks:new FormArray([])
  });

  get marksFormArray(){
    return this.studentForm.get('marks') as FormArray;
  }
  addmarks(){
    this.marksFormArray.push(
      new FormGroup({
        class: new FormControl(),
        year: new FormControl(),
        percentage: new FormControl('',[Validators.min(0),Validators.max(100)]),
      })
    )
  }

  delete(i:number){
    this.marksFormArray.removeAt(i);
  }

  constructor(){
    this.studentForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayscholar'){
          this.studentForm.addControl('busfee',new FormControl());
          this.studentForm.removeControl('hostelfee');
        }else{
          this.studentForm.addControl('hostelfee',new FormControl());
          this.studentForm.removeControl('busfee');
        }
      }
    )
  }

  
  create(){
    console.log(this.studentForm);
  }
}
