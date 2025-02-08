import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent }
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
