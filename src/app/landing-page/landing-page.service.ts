import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {
  
  constructor(private http: HttpClient) { }

  getTodaysMatches(fromAdminFlag : boolean) : Observable<any> {
    return this.http.get(`${environment.endPoint}todayMatches?fromAdmin=${fromAdminFlag}`)
  }
}
