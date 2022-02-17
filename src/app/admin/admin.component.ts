import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../info/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users:any;
  status:boolean | undefined
  constructor(private router:Router,private userObj:AdminService) {
    if(localStorage.getItem("username")!=null){
       this.status=true;
     }
   }

   userLogOut(){
     localStorage.clear;
     this.status=false;
     this.router.navigateByUrl('/');
   }

userLogut(){
  this.router.navigateByUrl('/info')
}

  ngOnInit(): void {
    
  //    this.userObj.getUser().subscribe((userData:any)=>{
  //       this.users=userData.result;
  //         console.log(this.users)
  
  //   },
  //     err=>{
  //       console.log("err in getting info data",err)
  //     }
  
  //   ) 

  }

  
}
