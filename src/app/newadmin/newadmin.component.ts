import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-newadmin',
  templateUrl: './newadmin.component.html',
  styleUrls: ['./newadmin.component.css']
})
export class NewadminComponent implements OnInit {

  status:boolean | undefined;
  constructor(private router:Router){
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
