import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchTimeTableService {
  private apiUrl = "http://localhost:8080/"
  
  constructor(private http: HttpClient) { }

  getListOfMatches(page: any, size: any): Observable<any> {
    return this.http.get(`${this.apiUrl}getAllMatches?page=${page}&size=${size}`);
  }
}
