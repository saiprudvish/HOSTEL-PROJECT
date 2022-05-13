import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  cnt:any;
  array:any;
  users:any;
  searchTerm:any;
  constructor(private userObj:DataService) { }




  ngOnInit(): void {
    this.userObj.getcnts().subscribe((userData:any)=>{
      this.array=userData.result;
        //console.log(this.users)
    },
    err=>{
      console.log("err in getting info data",err)
    }
    )
   

    this.userObj.getUser().subscribe((userData:any)=>{
      this.users=userData.result;
      this.cnt=this.users.length;
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
