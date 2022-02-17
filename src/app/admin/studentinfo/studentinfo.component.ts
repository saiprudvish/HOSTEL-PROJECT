import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/info/admin.service';
@Component({
  selector: 'app-studentinfo',
  templateUrl: './studentinfo.component.html',
  styleUrls: ['./studentinfo.component.css']
})
export class StudentinfoComponent implements OnInit {


  users:any;
  constructor(private userObj:AdminService) { }

  getinfo(){
    this.userObj.getUser().subscribe((userData:any)=>{
      this.users=userData.result;
        console.log(this.users)

  },
    err=>{
      console.log("err in getting info data",err)
    }

  ) 
  }

  ngOnInit(): void {
    
   


  
    

}

  
}
