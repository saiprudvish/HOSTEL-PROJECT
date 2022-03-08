import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-in',
  templateUrl: './in.component.html',
  styleUrls: ['./in.component.css']
})
export class InComponent implements OnInit {

  users:any;
  constructor(private userObj:DataService) { }

  ngOnInit(): void {
    this.userObj.getdash().subscribe((userData:any)=>{
      this.users=userData.result;
        console.log(this.users)

  },
    err=>{
      console.log("err in getting info data",err)
    }

  )
  }


}
