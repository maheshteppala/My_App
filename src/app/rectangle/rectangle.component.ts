import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
  a:number=0;
  b:number=0;
  result:number=0;

  area(){
    this.result=this.a*this.b
    console.log(this.result);
  }
  perimeter(){
    this.result=2*(this.a+this.b)
  }
}
