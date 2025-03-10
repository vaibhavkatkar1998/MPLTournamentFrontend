import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  constructor(private http: HttpClient) { }

  updateMatchResult(body : any) : Observable<any> {
    return this.http.post(`${environment.endPoint}updateMatchResult`, body, { responseType: 'text' })
  }
}
