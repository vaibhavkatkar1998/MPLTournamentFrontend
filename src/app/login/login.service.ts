import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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

}

