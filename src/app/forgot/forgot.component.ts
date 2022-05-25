import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  username:string | undefined;
  status:boolean | undefined;
  password: string = '';
  constructor(private router:Router) {
     
   }

  ngOnInit(): void {
      
  }

logInUser(){
  if(this.username=="19071A3248"){
    
    alert("password changed");
    localStorage.setItem("password",this.password);
    this.router.navigateByUrl('/login');
    console.log("Welcome to the dashboard");
    this.status=true;
  }
  else{
    alert("Invalid Credentials")
    console.log("user unauthorised");
  }
}
}
