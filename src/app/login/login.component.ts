import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLogin : boolean
  authForm: FormGroup
  errorMessage: string = "";
  successMessage: string = "";

  constructor(private fb: FormBuilder, private loginService : LoginService, private router : Router) {
    this.isLogin =true
    this.authForm = this.fb.group(
      {
        userName: ["", [Validators.required]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: [""],
      },
      { validators: (control) => this.passwordMatchValidator(control) },
    )
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    if (this.isLogin) {
      return null // Don't run validation if in login mode
    }
    const password = control.get("password")
    const confirmPassword = control.get("confirmPassword")

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { passwordMismatch: true }
    }

    return null
  }

  toggleForm() {
    this.authForm.reset();
    this.isLogin = !this.isLogin
    if (this.isLogin) {
      this.authForm.removeControl("confirmPassword")
    } else {
      this.authForm.addControl("confirmPassword", this.fb.control("", Validators.required))
      this.authForm.setValidators(this.passwordMatchValidator)
    }
    this.authForm.updateValueAndValidity()
  }

  onSubmit() {
    if (this.authForm.valid) {
      const user = {
        userName : this.authForm.controls["userName"].value,
        userPassword : this.authForm.controls["password"].value
       }

       if(this.isLogin) {
        this.loginUser(user);
       } else {
        this.registerUser(user);
       }
    }
  }

  registerUser(user: { userName: any; userPassword: any; }) {
      this.loginService.register(user).subscribe({
      next: (response) => {
        if (response && response == "User register successfully") {
          this.isLogin = true;
          this.authForm.reset();
          this.successMessage = "Registration successful, please login again!!"
        } else {
          console.warn("Error while registration");
        }
      },
      error: (error) => {
        console.error('Registration Error:', error);
      }
    });
  }


  loginUser(user: { userName: any; userPassword: any; }) {
    this.loginService.login(user).subscribe({
      next: (response) => {
        if (response && response.token) {
          localStorage.setItem("token", response.token);
          this.router.navigate(['/landing-page']);
        } else {
          console.warn("No token found in response");
        }
      },
      error: (error) => {
        this.errorMessage = "Invalid Username or Password"
        console.error('Login Error:', error);
      }
    });
  }

}
