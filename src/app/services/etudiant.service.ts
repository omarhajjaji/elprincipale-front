import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl, headers } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http:HttpClient) { }

  createEtudiant(etud: any):Observable<any>{
    return this.http.post(`${baseUrl}student/add`, etud,{ headers: headers});
  }
}
