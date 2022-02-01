import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  status:boolean | undefined
  constructor(private router:Router) {
    if(localStorage.getItem("username")!=null){
       this.status=true;
     }
   }

   userLogOut(){
     localStorage.clear;
     this.status=false;
     this.router.navigateByUrl('/');
   }

  ngOnInit(): void {
    
  }

  
}
