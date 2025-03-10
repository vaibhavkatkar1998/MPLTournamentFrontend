import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  
  constructor(private http: HttpClient) { }

  getAllUsers() : Observable<any> {
    return this.http.get(`${environment.endPoint}getAllUsers`)
  }

}
