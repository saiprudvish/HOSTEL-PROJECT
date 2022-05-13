import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-daterangedetails',
  templateUrl: './daterangedetails.component.html',
  styleUrls: ['./daterangedetails.component.css']
})
export class DaterangedetailsComponent implements OnInit {


  searchTerm:any;
  d:any;
  dates:any;
stas:boolean=true;
vals:any=[];
  dateData:any=[];
  username: string = '';
  username1: string = '';
  constructor(private userObj:DataService) { }

  ngOnInit(): void {
  }


  stus:boolean=true
  getData(){

this.stas=false
    this.userObj.getdate().subscribe((userData:any)=>{
      this.dates=userData.result;
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
          let s=this.username1.slice(8,10)
          let e=this.username.slice(8,10)
          if(Number(n)>=Number(s) && Number(n)<=Number(e)){
            this.dates[i].logdate=k+" " + b
            this.vals.push(this.dates[i])
          }
      }

      //console.log(this.vals)
        if(this.vals.length==0)
        {
          this.stus=false
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
