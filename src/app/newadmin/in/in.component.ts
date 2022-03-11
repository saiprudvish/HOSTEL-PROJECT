import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-in',
  templateUrl: './in.component.html',
  styleUrls: ['./in.component.css']
})
export class InComponent implements OnInit {

  users:any;
  first:any;
  outs:any;
  constructor(private userObj:DataService) { 
  }

  ngOnInit(): void {
    this.userObj.getdash().subscribe((userData:any)=>{
      this.users=userData.result;
        console.log(this.users)

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



}
