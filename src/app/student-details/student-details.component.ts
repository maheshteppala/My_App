import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentcardService } from '../studentcard.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
studentcard: any=[];
constructor(private _activatedRoute:ActivatedRoute, private _studentcardService:StudentcardService){
  _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data);

      _studentcardService.getStudentcard(data.id).subscribe(
        (data:any)=>{
          this.studentcard=data;
          console.log(data);
        }
      )
    }
  )
}

}
