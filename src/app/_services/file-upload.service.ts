import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  baseUrl = 'https://file.io'

  constructor(
    private http: HttpClient
  ) { }

  upload(file:any): Observable<any>{

    console.log(file);

    const formData = new FormData;
    formData.append('file', file, file.name);

    return this.http.post(this.baseUrl, formData);
  }


}
