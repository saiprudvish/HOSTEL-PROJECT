import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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
}
