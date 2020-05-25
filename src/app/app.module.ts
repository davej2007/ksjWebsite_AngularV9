import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AUTHModule } from './components/_AUTH-Modules/AUTH.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptorService } from './components/_AUTH-Modules/token-interceptor.service';
// KSJ
import { KSJNavBarComponent } from './components/0-KSJ/0-nav-bar/nav-bar.component';
import { KsjLogoComponent } from './components/0-KSJ/ksj-logo/ksj-logo.component';
import { WelcomeComponent } from './components/0-KSJ/1-welcome/welcome.component';
import { OurServicesComponent } from './components/0-KSJ/2-our-services/our-services.component';
import { DiscoComponent } from './components/0-KSJ/2-our-services/ServicePages/disco/disco.component';
import { KaraokeComponent } from './components/0-KSJ/2-our-services/ServicePages/karaoke/karaoke.component';
import { WeddingsComponent } from './components/0-KSJ/2-our-services/ServicePages/weddings/weddings.component';

import { ContactUsComponent } from './components/0-KSJ/3-contact-us/contact-us.component';
import { KSJPageNotFoundComponent } from './components/0-KSJ/9-page-not-found/page-not-found.component';
// Karaoke
import { KaraokeNavBarComponent } from './components/1-KARAOKE/0-nav-bar/nav-bar.component';
import { SongSearchComponent } from './components/1-KARAOKE/1-song-search/song-search.component';
import { KaraokePageNotFoundComponent } from './components/1-KARAOKE/9-page-not-found/page-not-found.component';

// Wedding
import { WeddingNavBarComponent } from './components/2-WEDDING/0-nav-bar/nav-bar.component';
import { IntroductionComponent } from './components/2-WEDDING/1-introduction/introduction.component';
import { WeddingPageNotFoundComponent } from './components/2-WEDDING/9-page-not-found/page-not-found.component';
// Operators
import { OperatorNavBarComponent } from './components/7-OPERATOR/0-nav-bar/nav-bar.component';
import { EventIntroComponent } from './components/7-OPERATOR/1-event-intro/event-intro.component';
import { OperatorPageNotFoundComponent } from './components/7-OPERATOR/9-page-not-found/page-not-found.component';
// Admin
import { AdminNavBarComponent } from './components/8-ADMIN/0-nav-bar/nav-bar.component';
import { UpcomingEventsComponent } from './components/8-ADMIN/1-upcoming-events/upcoming-events.component';
import { CreateNewEventComponent } from './components/8-ADMIN/2-create-new-event/create-new-event.component';
import { UpdateSongListComponent } from './components/8-ADMIN/4-update-song-list/update-song-list.component';
import { CreateNewOperatorComponent } from './components/8-ADMIN/7-create-new-operator/create-new-operator.component';
import { AdminPageNotFoundComponent } from './components/8-ADMIN/9-page-not-found/page-not-found.component';

// Others
import { LoginComponent } from './components/9-OTHERS/0-login/login.component';
import { LoginFormComponent } from './components/9-OTHERS/0-login/login-form/login-form.component';
import { RegistrationFormComponent } from './components/9-OTHERS/0-login/registration-form/registration-form.component';
import { OthersPageNotFoundComponent } from './components/9-OTHERS/9-page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    // KSJ
    KSJNavBarComponent,
      KsjLogoComponent,
      WelcomeComponent,
      OurServicesComponent,
      DiscoComponent,
      KaraokeComponent,
      WeddingsComponent,
      ContactUsComponent,
      KSJPageNotFoundComponent,
    // Karaoke
    KaraokeNavBarComponent,
      SongSearchComponent,
      KaraokePageNotFoundComponent,
// Wedding
    WeddingNavBarComponent,
      IntroductionComponent,
      WeddingPageNotFoundComponent,
// Operator
    OperatorNavBarComponent,
    OperatorPageNotFoundComponent,
// Admin
    AdminNavBarComponent,
    AdminPageNotFoundComponent,        
// Others
      LoginComponent,
      LoginFormComponent,
      RegistrationFormComponent,
      OthersPageNotFoundComponent,
      UpcomingEventsComponent,
      EventIntroComponent,
      CreateNewOperatorComponent,
      UpdateSongListComponent,
      CreateNewEventComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, // ng Angular Bootstrap
    AUTHModule,
    HttpClientModule, // HTTP client
    FormsModule, ReactiveFormsModule, // Forms
  ],
  exports:[
    AUTHModule
  ],
  providers: [
    { // HTTP Interceptor set-up
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
