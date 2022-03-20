import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { DataService } from '../data.service';

@Component({
  selector: 'app-studentdata',
  templateUrl: './studentdata.component.html',
  styleUrls: ['./studentdata.component.css']
})
export class StudentdataComponent implements OnInit {
users:any;
searchTerm:any;
  constructor(private userObj:DataService,private ar:Router) { }

  ngOnInit(): void {

        this.userObj.getUser().subscribe((userData:any)=>{
        this.users=userData.result;
         // console.log(this.users)
  
    },
      err=>{
        console.log("err in getting info data",err)
      }
  
    )
  }



//   onSelectid(bid:any){
//     this.ar.navigateByUrl('data/'+bid)
//  }
}
