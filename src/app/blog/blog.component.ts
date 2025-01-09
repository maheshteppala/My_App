import { Component } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogs:any=[];
blog: any;
  constructor( private _blogService:BlogService){
    _blogService.getBlogs().subscribe(
      (data:any)=>{
        this.blogs=data;
        console.log(this.blogs);
      }
    )
  }
}
