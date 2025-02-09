import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  private apiUrl = "http://localhost:8080/"
  
  constructor(private http: HttpClient) { }

  getAllUsers() : Observable<any> {
    return this.http.get(`${this.apiUrl}getAllUsers`)
  }

}
