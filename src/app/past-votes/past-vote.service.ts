import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PastVoteService {
  
  constructor(private http: HttpClient) { }

  getLast10Votes(userId : any) : Observable<any> {
    return this.http.get(`${environment.endPoint}getLast10Votes?userId=${userId}`)
  }
}
