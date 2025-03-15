import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { LoginService } from "./login/login.service";
import { Router } from "@angular/router";
import { NotificationService } from "./notification.service";
import { LoadingService } from "./loading.service";

@Injectable()
export class MplInterceptor implements HttpInterceptor {

    constructor(private loginService: LoginService, private router: Router, private notificationService : NotificationService,
      private loadingService: LoadingService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       const token = localStorage.getItem("token");
       if (token) {
        const clonedReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}` // Attach JWT token
          }
        });
        return next.handle(clonedReq).pipe(
            catchError((error: HttpErrorResponse) => {
              // If we get a 401 or 403 error, this means the token has expired or is invalid
              if (error.status === 401 || error.status === 403) {
                this.loginService.logout();  // Log the user out by clearing local storage and redirecting
                this.notificationService.showError("Session expired, please login again", 10000);
                this.loadingService.hide();
              }
              return throwError(error); // Rethrow the error
            })
          );
      }
  
      return next.handle(req);
    }
}
