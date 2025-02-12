import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { PastVotesComponent } from './past-votes/past-votes.component';

const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent, canActivate:[AuthGuard] },
  { path: '', component: LoginComponent},
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard] },
  { path: 'pastVotes', component: PastVotesComponent, canActivate:[AuthGuard] },
  { path: 'leaderboard', component: LeaderboardComponent, canActivate:[AuthGuard] }
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
