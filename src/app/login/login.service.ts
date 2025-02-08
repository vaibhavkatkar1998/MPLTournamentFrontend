import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {jwtDecode}from 'jwt-decode';

@Injectable({ 
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = "http://localhost:8080/"
  
  constructor(private http: HttpClient, private route : Router) { }

  login(body : any) : Observable<any> {
    return this.http.post(`${this.apiUrl}custom-login`, body, { headers: { 'Content-Type': 'application/json' } });
  }

  logout() {
    localStorage.removeItem('token'); // Clear token on logout
    this.route.navigate(['/login']);
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
    debugger
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

