import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
headers:any;
    constructor(private http:HttpClient) {
    this.headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  })
  }
    getDemandeEnCours():Observable<any>{
    this.headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.get(`${baseUrl}demande/get-all-encours`,{ headers: this.headers});
  }
  accepterDemande(id:any):Observable<any>{
    this.headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    console.log(this.headers)
    console.log(`${baseUrl}demande/etat/${id}`)
    return this.http.put(`${baseUrl}demande/etat/${id}`,{},{ headers: this.headers});
  }
  genererAttestation(etudiant:any):Observable<any>{
    this.headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.post(`${baseUrl}attestpresence/generateAttestation`,etudiant,{ headers: this.headers});
  }

  refuserDemande(id:any,raison:any):Observable<any>{
    this.headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.put(`${baseUrl}demande/etat/${id}/set/${raison}`,{},{ headers: this.headers});
  }
    getDemandeAll():Observable<any>{
    this.headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.get(`${baseUrl}demande/get-all`,{ headers: this.headers});
  }
}
