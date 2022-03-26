import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


dates:any;
stas:boolean=true;
vals:any=[];
  dateData:any=[];
  username: string = '';
  username1: string = '';
  users:any;
  searchTerm:any;
  constructor(private userObj:DataService) { }

  ngOnInit(): void {
    this.userObj.getdash().subscribe((userData:any)=>{
      this.users=userData.result;
        //console.log(this.users)

  },
    err=>{
      console.log("err in getting info data",err)
    }

  )


  }
 

  status:boolean=true
  pills(){
      this.status=false
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
         let idx=0
          while(this.dateData[idx]!='T'){
            k=k+this.dateData[idx]
            idx=idx+1;
          }
          //console.log(k)
        //console.log(k.slice(5,7))
          let n=k.slice(8,10)
          let s=this.username1.slice(8,10)
          let e=this.username.slice(8,10)
          if(Number(n)>=Number(s) && Number(n)<=Number(e)){
            this.dates[i].logdate=k
            this.vals.push(this.dates[i])
          }
      }

      console.log(this.vals)
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
