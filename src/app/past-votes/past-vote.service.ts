import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PastVoteService {
  private apiUrl = "http://localhost:8080/"
  
  constructor(private http: HttpClient) { }

  getLast10Votes(userId : any) : Observable<any> {
    return this.http.get(`${this.apiUrl}getLast10Votes?userId=${userId}`)
  }
}
