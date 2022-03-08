import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users:any;
  constructor(private userObj:DataService) { }

  ngOnInit(): void {
    


  }
 

  status:boolean=true
  pills(){
      this.status=false
  }
}
