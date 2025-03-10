import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class MatchTimeTableService {
  
  constructor(private http: HttpClient) { }

  getListOfMatches(page: any, size: any): Observable<any> {
    return this.http.get(`${environment.endPoint}getAllMatches?page=${page}&size=${size}`);
  }
}
