import { Component, Input } from '@angular/core';
import { max } from 'rxjs';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent {



@Input() max: number=0;

text: string='';
textCount:number=0;

onTextChange(event:any){
  this.textCount=this.text.length;
  if(this.textCount==this.max){
    alert("You have reached max characters");
  }else{
    return;
  }
}
}