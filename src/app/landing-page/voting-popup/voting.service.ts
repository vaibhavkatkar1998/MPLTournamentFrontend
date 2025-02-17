import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VotingService {
  private apiUrl = "http://localhost:8080/"
  
  constructor(private http: HttpClient) { }

  registerVote(body : any, userId : any) : Observable<any> {
    return this.http.post(`${this.apiUrl}registerVote?userId=${userId}`, body, { responseType: 'text' })
  }
}
