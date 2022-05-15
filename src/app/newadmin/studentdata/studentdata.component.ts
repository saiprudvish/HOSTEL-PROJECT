import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-studentdata',
  templateUrl: './studentdata.component.html',
  styleUrls: ['./studentdata.component.css']
})
export class StudentdataComponent implements OnInit {

startIndex=0;
endIndex=3;
users:any;
searchTerm:any;
searchrno:any;
p:any;

  constructor(private userObj:DataService,private ar:Router) { 

  }





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
