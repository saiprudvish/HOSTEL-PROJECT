import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataSource=new BehaviorSubject<any>(0)
  dataObservable=this.dataSource.asObservable();

   updateDataObservable(data:any){
     this.dataSource.next(data)
   }


  constructor(private hc:HttpClient) { 
  }
  getUser():Observable<any>{
    return this.hc.get<any>('/user/data')
  }
  getdash():Observable<any>{
    return this.hc.get<any>('/user/dash')
  }
  getdasho():Observable<any>{
    return this.hc.get<any>('/user/dasho')
  }
  getusersData(id:any):Observable<any>{
    return this.hc.get(`/user/getuser/${id}`)
  }
  getusersDatabyindate(id:any):Observable<any>{
    return this.hc.get(`/user/getindate/${id}`)
  }
  getdate():Observable<any>{
    return this.hc.get<any>('/user/getval')
  }
  getcnts():Observable<any>{
    return this.hc.get<any>('/user/getcnt')
  }
}
