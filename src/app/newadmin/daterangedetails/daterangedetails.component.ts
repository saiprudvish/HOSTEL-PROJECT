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
dups:any=[];
  dateData:any=[];
  username: string = '';
  username1: string = '';
 obj:any;
  constructor(private userObj:DataService) { }

  ngOnInit(): void {
  }

 
  check:boolean=true;
  stus:boolean=true
  cnt:number=1;
  
  getData(){
   
    this.obj = {
      d1:this.username,
      d2:this.username1
      };
      //console.log(this.obj)
this.stas=false

    this.userObj.getdaterange(this.obj).subscribe((userData:any)=>{
      this.userObj.updateDataObservable(userData.results)
      this.userObj.dataObservable.subscribe(prodObj=>{
        this.vals=prodObj;
           console.log(this.vals)
     })
      

      
  },
    err=>{
      console.log("err in getting info data",err)
    }

  )
  
  }


}
