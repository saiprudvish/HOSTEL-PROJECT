import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-out',
  templateUrl: './out.component.html',
  styleUrls: ['./out.component.css']
})
export class OutComponent implements OnInit {

  users:any;
  searchTerm:any;
  constructor(private userObj:DataService) { }

  ngOnInit(): void {
    this.userObj.getdasho().subscribe((userData:any)=>{
      this.users=userData.result;
        //console.log(this.users)
  },
    err=>{
      console.log("err in getting info data",err)
    }
  )
  }
  status:boolean=true
  getdata(){
      this.status=false
  }
}
