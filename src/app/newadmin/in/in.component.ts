import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-in',
  templateUrl: './in.component.html',
  styleUrls: ['./in.component.css']
})
export class InComponent implements OnInit {

  users:any;
  dates:any;
vals:any=[];
  dateData:any=[];
  username: string = '';
  username1: string = '';
  d:any;
  iddata:any;
  first:any;
  outs:any;
  searchTerm:any;
  constructor(private userObj:DataService,private ar:Router) { 
  }

  ngOnInit(): void {
    this.userObj.getdash().subscribe((userData:any)=>{
      this.users=userData.result;
       // console.log(this.users.logdate)




  },
    err=>{
      console.log("err in getting info data",err)
    }

  )}
//   this.userObj.getdasho().subscribe((userData:any)=>{
//     this.first=userData.result;
//     console.log(this.first[0])

// },
//   err=>{
//     console.log("err in getting info data",err)
//   }
// for (var j = 0; j < this.first.length; j++){

//   console.log(this.first[0].rno);
  
//   }
//   }




// onSelectid(bid:any){
//    this.ar.navigateByUrl('in/'+bid)
// }



}
