import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {



 
   dateobj:any;
  satus:boolean=true;
  duts:any;
   date:any;
   time:any;
  laas:any=[];
    datData:any=[];
  username: string = '';
  username1: string = '';
  d:any;
  dates:any;
  dateData:any=[];
  vals:any=[];

  page:any;
  constructor(private userObj:DataService,private ar:ActivatedRoute) { }

  ngOnInit(): void {


  

        //get id from url
       
        var url = this.ar.snapshot.paramMap.get('bid')
 // console.log(url);

    
        //get data of student with this current id
        this.userObj.getusersData(url).subscribe(
          obj=>{
      this.vals=obj.result
           

          },
          err=>{
            console.log("err in reading movie",err)
          }
        )





     


  }
 
getData(){
    this.satus=false;
         

   
    var url = this.ar.snapshot.paramMap.get('bid')
    this.userObj.getusersData(url).subscribe(
      obj=>{
          this.vals=obj.result

          this.dateobj = {
            d1:this.username,
            d2:this.username1,
            data:url
            };
            this.userObj.getindate(this.dateobj).subscribe( 
              obj=>{
                   this.vals=obj.results
                    
              },
              err=>{
                console.log("err in reading movie",err)
              }
            )
      },
      err=>{
        console.log("err in reading movie",err)
      }
    )
//console.log(this.username1)
//console.log(this.username)
}
}

