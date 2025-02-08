import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = "http://localhost:8080/"
  
  constructor(private http: HttpClient) { }

  updateMatchResult(body : any) : Observable<any> {
    return this.http.post(`${this.apiUrl}updateMatchResult`, body, { responseType: 'text' })
  }
}
