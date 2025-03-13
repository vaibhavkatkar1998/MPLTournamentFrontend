import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { LoadingService } from '../loading.service';

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

  constructor(private fb: FormBuilder, private loginService : LoginService, private router : Router, private notificationService: NotificationService
    ,private loadingService: LoadingService) {
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
    this.errorMessage = "";
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
        userName : this.authForm.controls["userName"].value.trim(),
        userPassword : this.authForm.controls["password"].value.trim()
       }

       if(this.isLogin) {
        this.loginUser(user);
       } else {
        this.registerUser(user);
       }
    } else {
      this.notificationService.showError("Error in form validation",5000)
    }
  }

  registerUser(user: { userName: any; userPassword: any; }) {
    this.loadingService.show()
      this.loginService.register(user).subscribe({
      next: (response) => {
        if (response && response == "User register successfully") {
          this.isLogin = true;
          this.authForm.reset(); // Clear all fields and errors
          // Reinitialize login form without confirmPassword
          this.authForm = this.fb.group({
            userName: ["", [Validators.required]],
            password: ["", [Validators.required, Validators.minLength(6)]],
          });
          this.successMessage = "Registration successful, please login again!!"
          this.notificationService.showInfo("Registration successful, please login again!!",10000)
          this.loadingService.hide()
        } else {
          this.loadingService.hide()
          console.warn("Error while registration");
        }
      },
      error: (error) => {
        this.loadingService.hide()
        console.error('Registration Error:', error);
      }
    });
  }


  loginUser(user: { userName: any; userPassword: any; }) {
    this.loadingService.show()
    this.loginService.login(user).subscribe({
      next: (response) => {
        if (response && response.token) {
          localStorage.setItem("token", response.token);
          this.loadingService.hide()
          this.router.navigate(['/landing-page']);
        } else {
          this.loadingService.hide()
          console.warn("No token found in response");
        }
      },
      error: (error) => {
        this.loadingService.hide()
        this.notificationService.showError("Invalid Username or Password",5000)
        this.errorMessage = "Invalid Username or Password"
        console.error('Login Error:', error);
      }
    });
  }

}
