import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KSJNavBarComponent } from './components/0-KSJ/0-nav-bar/nav-bar.component';
import { WelcomeComponent } from './components/0-KSJ/1-welcome/welcome.component';
import { OurServicesComponent } from './components/0-KSJ/2-our-services/our-services.component';
import { ContactUsComponent } from './components/0-KSJ/3-contact-us/contact-us.component';
import { KSJPageNotFoundComponent } from './components/0-KSJ/9-page-not-found/page-not-found.component';
import { KaraokeNavBarComponent } from './components/1-KARAOKE/0-nav-bar/nav-bar.component';
import { SongSearchComponent } from './components/1-KARAOKE/1-song-search/song-search.component';
import { KaraokePageNotFoundComponent } from './components/1-KARAOKE/9-page-not-found/page-not-found.component';
import { WeddingNavBarComponent } from './components/2-WEDDING/0-nav-bar/nav-bar.component';
import { IntroductionComponent } from './components/2-WEDDING/1-introduction/introduction.component';
import { WeddingPageNotFoundComponent } from './components/2-WEDDING/9-page-not-found/page-not-found.component';
import { OthersPageNotFoundComponent } from './components/9-OTHERS/9-page-not-found/page-not-found.component';


const routes: Routes = [
  // KSJ Site
  { path:'ksj',                component   : KSJNavBarComponent, children: [
    { path : 'welcome',        component   : WelcomeComponent},
    { path : 'ourservices',    component   : OurServicesComponent },
    { path : 'contactus',      component   : ContactUsComponent },
    { path : '',               redirectTo  : '/ksj/welcome', pathMatch: 'full' },
    { path : '**',             component   : KSJPageNotFoundComponent}
  ]},
  // karaoke Site
  { path:'karaoke',            component   : KaraokeNavBarComponent, children: [
    { path : 'songsearch',     component   : SongSearchComponent },
    { path : '',               redirectTo  : '/karaoke/songsearch', pathMatch: 'full' },
    { path : '**',             component   : KaraokePageNotFoundComponent}
]},
  // Wedding Site
  { path:'wedding',            component   : WeddingNavBarComponent, children: [
    { path : 'introduction',   component   : IntroductionComponent },
    { path : '',               redirectTo  : '/wedding/introduction', pathMatch: 'full' },
    { path : '**',             component   : WeddingPageNotFoundComponent}
  ]},
  { path : '',                 redirectTo  : '/ksj/welcome', pathMatch: 'full' },
    
  { path: '**',                component   : OthersPageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// { path:'ksj',                component   : KSJNavBarComponent, children: [
//   { path : 'welcome',        component   : WelcomeComponent,
//                                     canActivate : [AuthGuard],
//                                     data        : { role : [0,1], status: [1,0]  },
//                                     resolve     : { info : AuctionInfoService }  }