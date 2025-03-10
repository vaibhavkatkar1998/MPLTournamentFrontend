import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class VotingService {
  
  constructor(private http: HttpClient) { }

  registerVote(body : any, userId : any) : Observable<any> {
    return this.http.post(`${environment.endPoint}registerVote?userId=${userId}`, body, { responseType: 'text' })
  }
}
