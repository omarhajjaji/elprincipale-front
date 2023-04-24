import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
headers:any;
  constructor(private http:HttpClient) {
    this.headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  })
   }

  createEtudiant(etud: any):Observable<any>{
   this.headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  })
    return this.http.post(`${baseUrl}student/add`, etud,{ headers: this.headers});
  }
  getAllEtudiants():Observable<any>{
    this.headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  })
    return this.http.get(`${baseUrl}student/get-all`,{ headers: this.headers});
  }
  getEtudiantByCin(cin:string):Observable<any>{
    this.headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  })
    return this.http.get(`${baseUrl}student/get/${cin}`,{ headers: this.headers});
  }

  deleteEtudiant(cin:any):Observable<any>{
    this.headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  })
    return this.http.delete(`${baseUrl}student/delete/${cin}`,{ headers: this.headers});
  }

}
