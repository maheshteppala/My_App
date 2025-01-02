import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  
  name:string="Mahesh";
  age:number=30;
  email:string="maheshrocks106@gmail.com"

  isIndian:boolean=false;

  phone:string="+91"

  num1:number=0;
  num2:number=0;
  result:number=0;

  sum(){
    this.result=this.num1+this.num2;
    console.log(this.result);
  }
  
  
  
  // user:any={
  //   name:"Mahesh",
  //   age:30,
  //  email:"maheshrocks106@gmail.com"
  // }

  submit(){
    alert("Clicked submit button")
  }
  typing(){
    alert("Typing.........")
  }
}
