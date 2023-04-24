import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
headers:any;
    constructor(private http:HttpClient) {
    this.headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  })
  }
    getAllReclamation():Observable<any>{
    this.headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.get(`${baseUrl}reclamation/get-all`,{ headers: this.headers});
  }
  accepterReclamation(id:any):Observable<any>{
    this.headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    console.log(this.headers)
    return this.http.put(`${baseUrl}reclamation/etat/${id}/set/fournie`,{},{ headers: this.headers});
  }

  refuserReclamation(id:any):Observable<any>{
    this.headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.put(`${baseUrl}reclamation/etat/${id}/set/refusee`,{},{ headers: this.headers});
  }
}
