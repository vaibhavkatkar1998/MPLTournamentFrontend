import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private loginService : LoginService, private router: Router) {
  }


  submit() {
    if (this.loginForm.valid) {
      debugger
       const user = {
        userName : this.loginForm.controls["username"].value,
        userPassword : this.loginForm.controls["password"].value
       }

       this.loginService.login(user).subscribe({
        next: (response) => {
          debugger
          if (response && response.token) {
            localStorage.setItem("token", response.token);
            this.router.navigate(['/landing-page']);
          } else {
            console.warn("No token found in response");
          }
        },
        error: (error) => {
          console.error('Login Error:', error);
        }
      });
    }
  }


}
