import { Component } from '@angular/core';
import { StudentcardService } from '../studentcard.service';

@Component({
  selector: 'app-studentcard',
  templateUrl: './studentcard.component.html',
  styleUrls: ['./studentcard.component.css']
})
export class StudentcardComponent {
  studentcards:any=[];
  constructor( private _studentService:StudentcardService){
    this.pageload();
    
  }
  pageload(){
    this._studentService.getStudentcards().subscribe(
      (data:any)=>{
        this.studentcards=data;
        console.log(this.studentcards);
      }
    )
  }
  term:string="";

  filter(){
    this._studentService.getFilteredStudentcard(this.term).subscribe(
      (data:any)=>{
        this.studentcards=data;
        console.log(this.studentcards);
      },(err:any)=>{
        alert("Internal Server Error");     
      }
    )
  }

  column:string="";
  order:string="";
  sort(){
    this._studentService.getSortedStudentcards(this.column,this.order).subscribe(
      (data:any)=>{
        this.studentcards=data;
        console.log(this.studentcards);
      },(err:any)=>{
        alert("Internal Server Error");
      }
    )
    
  }

  limit:number=0;
  page:number=0;
  pagination(){
    this._studentService.getPaginatedStudentcards(this.limit,this.page).subscribe(
      (data:any)=>{
        this.studentcards=data;
        console.log(this.studentcards);
      },(err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  delete(id:number){
    if(confirm("Are you sure you want to delete")==true){
      this._studentService.deleteStudentcard(id).subscribe(
        (data:any)=>{
          alert("Record Deleted Successfully");
          this.pageload();
        },(err:any)=>{
          alert("Internal Server Error");
        }
      )
    }else{
      alert("You have cancelled")
    }
    
  }
}
