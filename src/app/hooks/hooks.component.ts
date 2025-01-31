import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnChanges, OnInit, DoCheck,AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  interval:any;


  constructor(){
    console.log("Constructor");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy(): void {
    console.log("ngondestroy");
    clearInterval(this.interval);
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngDoCheck(): void {
    console.log("ngdocheck");
  }
  ngOnInit(): void {
    console.log("ngoninit");
    this.interval=setInterval(()=>{
      console.log("Interval......");
    },3000)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngonchanges");
  }
}
