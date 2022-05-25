import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-indaterange',
  templateUrl: './indaterange.component.html',
  styleUrls: ['./indaterange.component.css']
})
export class IndaterangeComponent implements OnInit {

  stas:boolean=true;
  username: string = '';
  username1: string = '';
  d:any;
  dates:any;
  dateData:any=[];
  vals:any=[];
  constructor(private userObj:DataService,private ar:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    

    this.router.navigate(['path/to'])
    .then(() => {
      window.location.reload();
    });

    var url = this.ar.snapshot.paramMap.get('bid')
    // console.log(url);
   
       
           //get data of student with this current id
           this.userObj.getusersDatabyindate(url).subscribe(
             obj=>{
         
               this.dates=obj.result;
               console.log(this.dates)
              },
              err=>{
                console.log("err in reading movie",err)
              }
            )
  }




  stus:boolean=true
  getData(){

this.stas=false
    this.userObj.getdate().subscribe((userData:any)=>{
      this.dates=userData.result;
      //console.log(this.dates)
      for(let i in this.dates){
         this.dateData=this.dates[i].logdate;
         let k=""
         let b=""
         let idx=0
          while(this.dateData[idx]!='T'){
            k=k+this.dateData[idx]
            idx=idx+1;
          }
          idx=idx+1
          while(this.dateData[idx]!='.'){
              b=b+this.dateData[idx]
              idx=idx+1;
          }
       
        //console.log(k)
          let n=k.slice(8,10)
          //console.log(this.username)
          let s=this.username1.slice(8,10)
          let e=this.username.slice(8,10)
        //console.log(e)
          if(Number(n)>=Number(s) && Number(n)<=Number(e)){
            this.dates[i].logdate=k+" " + b
            this.vals.push(this.dates[i])
          }
      }

      //console.log(this.vals)
        if(this.vals.length==0)
        {
          this.stus=false
        }
  },
    err=>{
      console.log("err in getting info data",err)
    }

  )
    //console.log(this.username1)
    //console.log(this.username)
  }

}
