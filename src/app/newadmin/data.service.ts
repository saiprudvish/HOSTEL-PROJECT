import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataSource=new BehaviorSubject<any>(2)
  dataObservable=this.dataSource.asObservable();

   updateDataObservable(data:any){
     this.dataSource.next(data)
   }
   
 
  
  constructor(private hc:HttpClient) { 
  }
  getUser():Observable<any>{
    return this.hc.get<any>('/user/StudentsData')
  }
  getdash():Observable<any>{
    return this.hc.get<any>('/user/InStudentsData')
  }
  getdasho():Observable<any>{
    return this.hc.get<any>('/user/OutStudentsData')
  }
  getusersData(id:any):Observable<any>{
    return this.hc.get(`/user/StudentHistorybyId/${id}`)
  }
  getusersDatabyindate(id:any):Observable<any>{
    return this.hc.get(`/user/getindate/${id}`)
  }
  getindate(obj:any):Observable<any>{
    return this.hc.post<any>('/user/EachStudentHistoryWithDateRange',obj)
  }
  getdate():Observable<any>{
    return this.hc.get<any>('/user/getval')
  }
  getcnts():Observable<any>{
    return this.hc.get<any>('/user/getcnt')
  }
  getdaterange(dateobj:any):Observable<any>{
    return this.hc.post<any>('/user/getdaterangeStudents',dateobj)
  }
}
