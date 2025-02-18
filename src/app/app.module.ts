import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatchCardSectionComponent } from './landing-page/match-card-section/match-card-section.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { MplInterceptor } from './mpl-interceptor';
import { DatePipe } from '@angular/common';
import { VotingPopupComponent } from './landing-page/voting-popup/voting-popup.component';
import { AdminComponent } from './admin/admin.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { PastVotesComponent } from './past-votes/past-votes.component';
import { NotificationService } from './notification.service';
import { LoadingComponent } from './shared/loading/loading.component';
import { MatchTimeTableComponent } from './match-time-table/match-time-table.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MatchCardSectionComponent,
    LoginComponent,
    VotingPopupComponent,
    AdminComponent,
    LeaderboardComponent,
    PastVotesComponent,
    LoadingComponent,
    MatchTimeTableComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule, 
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: MplInterceptor, multi: true},
    {provide : DatePipe}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
