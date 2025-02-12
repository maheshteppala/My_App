import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  moon:string='';

  @Input() a:number=0; 
  @Output() bEvent: EventEmitter<number>=new EventEmitter();


@Input() star:string='';
@Output() sEvent:EventEmitter<string>=new EventEmitter();

send(){
  this.sEvent.emit(this.moon);
}
}

