import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// KSJ
import { KSJNavBarComponent } from './components/0-KSJ/0-nav-bar/nav-bar.component';
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
import { OthersPageNotFoundComponent } from './components/9-OTHERS/9-page-not-found/page-not-found.component';
// Admin
import { AdminComponent } from './components/9-OTHERS/admin/admin.component';
import { KsjLogoComponent } from './components/0-KSJ/ksj-logo/ksj-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    // KSJ
    KSJNavBarComponent,
      WelcomeComponent,
      OurServicesComponent,
      DiscoComponent,
      KaraokeComponent,
      WeddingsComponent,
      ContactUsComponent,
      KSJPageNotFoundComponent,
    KaraokeNavBarComponent,
      SongSearchComponent,
      KaraokePageNotFoundComponent,
    WeddingNavBarComponent,
      IntroductionComponent,
      WeddingPageNotFoundComponent,
    OthersPageNotFoundComponent,
    AdminComponent,
    KsjLogoComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
