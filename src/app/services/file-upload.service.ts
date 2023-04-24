import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
    headers:any;
    
  constructor(private http:HttpClient) { }
  
  // Returns an observable
  upload(file:File):Observable<any> {
     this.headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  })
      // Create form data
      const formData = new FormData(); 
        
      // Store form name as "file" with file data
      formData.append("file", file);
      console.log(formData)
      return this.http.post(`${baseUrl}student/upload`, formData,{
        headers:this.headers,
      reportProgress: true,
      responseType: 'text'})
  }
}
