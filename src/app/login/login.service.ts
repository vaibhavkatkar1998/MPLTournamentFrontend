import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {jwtDecode}from 'jwt-decode';
import { environment } from 'src/environments/environments';

@Injectable({ 
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http: HttpClient, private route : Router) { }

  login(body : any) : Observable<any> {
    return this.http.post(`${environment.endPoint}custom-login`, body, { headers: { 'Content-Type': 'application/json' } });
  }

  register(body : any) : Observable<any> {
    return this.http.post(`${environment.endPoint}register`, body, { responseType: 'text' });
  }

  logout() {
    localStorage.removeItem('token'); // Clear token on logout
    this.route.navigate(['']);
  }

  getToken(): string | null {
    return localStorage.getItem('token'); // Retrieve stored token
  }

  isAuthenticated(): boolean {
    return !!this.getToken(); // Check if token exists
  }

  getDecodedToken(token: string): any {
    try {
      return jwtDecode(token);
    } catch (error) {
      console.error('Invalid Token:', error);
      return null;
    }
  }

  getClaim(claim: string): any {
    const token = this.getToken();
    if(token != null) {
      const decodedToken = this.getDecodedToken(token);
      return decodedToken ? decodedToken[claim] : null;
    } else {
      console.error('Token is null');
      return ""
    }
  }

}

