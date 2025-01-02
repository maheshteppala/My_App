import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  height:number=0;
  weight:number=0;
  result:number=0;
  bmi:string="";

  submit(){
    this.result=this.weight/(this.height*this.height)
    console.log(this.result);

    if(this.result<18.5 && this.result>0){
      console.log("Under Weight");
      this.bmi="Under Weight";
  }else if(this.result>=18.5 && this.result<25){
      console.log("Normal");
      this.bmi="Normal";
  }else if(this.result>=25 && this.result<30){
      console.log("Over Weight");
      this.bmi="Over Weight";
  }else if(this.result>=30 && this.result<35){
      console.log("Obese");
      this.bmi="Obese";
  }else if(this.result>=35 && this.result<40){
      console.log("Severly Obese");
      this.bmi="Severly Obese";
  }else if(this.result>=40){
      console.log("Morbidly Obese");
      this.bmi="Morbidly Obese";
  }
  }
}
