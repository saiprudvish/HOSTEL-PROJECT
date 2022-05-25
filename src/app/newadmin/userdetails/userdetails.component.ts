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



 

  satus:boolean=true;
  duts:any;

  laas:any=[];
    datData:any=[];
  username: string = '';
  username1: string = '';
  d:any;
  dates:any;
  dateData:any=[];
  vals:any=[];

  constructor(private userObj:DataService,private ar:ActivatedRoute) { }

  ngOnInit(): void {


  

        //get id from url
       
        var url = this.ar.snapshot.paramMap.get('bid')
 // console.log(url);

    
        //get data of student with this current id
        this.userObj.getusersData(url).subscribe(
          obj=>{
      
            this.dates=obj.result;
            //console.log(this.dates)
           for(let i in this.dates){
            this.dateData=this.dates[i].logdate;
            let k=""
            let b=""
            let idx=0
             while(this.dateData[idx]!='T'){
               k=k+this.dateData[idx]
               idx=idx+1;
             }
             idx=idx+1
             while(this.dateData[idx]!='.'){
                 b=b+this.dateData[idx]
                 idx=idx+1;
             }
            //console.log(b)
           //console.log(k.slice(5,7))
             let n=k.slice(8,10)
     
               this.dates[i].logdate=k +" " + " " +" " +  b;
               this.vals.push(this.dates[i])
             
         }

          },
          err=>{
            console.log("err in reading movie",err)
          }
        )





     


  }
 
getData(){
    this.satus=false;
         
    var url = this.ar.snapshot.paramMap.get('bid')
this.userObj.getusersDatabyindate(url).subscribe((userData:any)=>{
  this.duts=userData.result;
  //console.log(this.dates)
  for(let i in this.dates){
     this.datData=this.duts[i].logdate;
     let k=""
     let b=""
     let idx=0
      while(this.datData[idx]!='T'){
        k=k+this.datData[idx]
        idx=idx+1;
      }
      idx=idx+1
      while(this.datData[idx]!='.'){
          b=b+this.datData[idx]
          idx=idx+1;
      }
   
    //console.log(k)
      let n=k.slice(8,10)
      //console.log(this.username)
      let s=this.username1.slice(8,10)
      let e=this.username.slice(8,10)
    //console.log(e)
      if(Number(n)>=Number(s) && Number(n)<=Number(e)){
        this.duts[i].logdate=k+" " + b
        this.laas.push(this.duts[i])
      }
  }


},
err=>{
  console.log("err in getting info data",err)
}

)
//console.log(this.username1)
//console.log(this.username)
}
}

