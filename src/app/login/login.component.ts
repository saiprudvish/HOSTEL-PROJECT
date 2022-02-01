import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string | undefined;
  password:string | undefined;
  status:boolean | undefined;

  constructor(private router:Router) {
     
   }

  ngOnInit(): void {
      
  }

logInUser(){
  if(this.username=="admin" && this.password=="admin"){
    
    alert("Login Success");
    localStorage.setItem("username",this.username);
    this.router.navigateByUrl('/admin');
    console.log("Welcome to the dashboard");
    this.status=true;
  }
  else{
    alert("Invalid Credentials")
    console.log("user unauthorised");
  }
}

}
