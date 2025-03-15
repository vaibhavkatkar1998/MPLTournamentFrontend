import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AllUserVotingService {
  constructor(private http: HttpClient) { }

  getAllUserVotes() : Observable<any> {
    return this.http.get(`${environment.endPoint}getAllUserVotes`)
  }
}
