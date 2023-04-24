import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  onLogin(obj: any) : Observable<any> {
    return this.http.post(`${baseUrl}student/login`,obj)
  }

  storeToken(token: string){
    localStorage.setItem("token",token)
  }
  getToken(){
    return localStorage.getItem('token')
  }
}
