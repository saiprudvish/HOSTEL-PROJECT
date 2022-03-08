import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

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
}
