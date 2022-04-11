import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   cnt:any;
   ins:any;
   outs:any;
   incnt:any;
   outcnt:any;
  users:any;
  count:any;
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


  this.userObj.getUser().subscribe((userData:any)=>{
    this.count=userData.result;
     console.log(this.count)
     this.cnt=this.count.length
},
  err=>{
    console.log("err in getting info data",err)
  }

)


this.userObj.getdash().subscribe((userData:any)=>{
  this.ins=userData.result;
  this.incnt=this.ins.length
   // console.log(this.users.logdate)




},
err=>{
  console.log("err in getting info data",err)
}

)


this.userObj.getdasho().subscribe((userData:any)=>{
  this.outs=userData.result;
  this.outcnt=this.outs.length
    //console.log(this.users)
},
err=>{
  console.log("err in getting info data",err)
}
)

//console.log(this.searchTerm)

  }
 


  status:boolean=true
  pills(){
      this.status=false
  }

 
  
}
