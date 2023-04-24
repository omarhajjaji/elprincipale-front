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

  storeToken(response:any){
    let token = response.token
    let etudiant = response.etudiant
    localStorage.setItem("token",token)
    localStorage.setItem("etudiant",JSON.stringify(etudiant))
  }
  storeTokenAdmin(response:any){
    let token = response.token
    localStorage.setItem("token",token)
  }

  getToken(){
    return localStorage.getItem('token')
  }
  logOut(){
    localStorage.clear()
  }
}
