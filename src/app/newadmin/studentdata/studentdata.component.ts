import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-studentdata',
  templateUrl: './studentdata.component.html',
  styleUrls: ['./studentdata.component.css']
})
export class StudentdataComponent implements OnInit {
users:any;
  constructor(private userObj:DataService) { }

  ngOnInit(): void {

        this.userObj.getUser().subscribe((userData:any)=>{
        this.users=userData.result;
          console.log(this.users)
  
    },
      err=>{
        console.log("err in getting info data",err)
      }
  
    )
  }

}
