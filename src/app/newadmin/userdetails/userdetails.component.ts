import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {


  Obj:any;
  

  constructor(private fs:DataService,private ar:ActivatedRoute) { }

  ngOnInit(): void {


  

        //get id from url
       
        var url = this.ar.snapshot.paramMap.get('bid')
  console.log(url);

    
        //get data of movie with this current id
        this.fs.getusersData(url).subscribe(
          obj=>{
      
            this.Obj=obj.result;
            console.log(this.Obj)

          },
          err=>{
            console.log("err in reading movie",err)
          }
        )





     


  }
 
}
