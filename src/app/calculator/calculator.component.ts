import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  a:number=0;
  b:number=0;
  result:number=0;

  add(){
    this.result=this.a+this.b;
    console.log(this.result);
  }
  substract(){
    this.result=this.a-this.b;
    console.log(this.result);
  }
  divide(){
    this.result=this.a/this.b;
    console.log(this.result);
  }
  multiply(){
    this.result=this.a*this.b;
    console.log(this.result);
  }
}
