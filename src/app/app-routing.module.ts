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
import { LoginComponent } from './components/9-OTHERS/0-login/login.component';
import { OperatorNavBarComponent } from './components/7-OPERATOR/0-nav-bar/nav-bar.component';
import { AdminNavBarComponent } from './components/8-ADMIN/0-nav-bar/nav-bar.component';
import { AdminPageNotFoundComponent } from './components/8-ADMIN/9-page-not-found/page-not-found.component';
import { OperatorPageNotFoundComponent } from './components/7-OPERATOR/9-page-not-found/page-not-found.component';
import { UpcomingEventsComponent } from './components/8-ADMIN/1-upcoming-events/upcoming-events.component';
import { EventIntroComponent } from './components/7-OPERATOR/1-event-intro/event-intro.component';
import { CreateNewEventComponent } from './components/8-ADMIN/2-create-new-event/create-new-event.component';
import { UpdateSongListComponent } from './components/8-ADMIN/4-update-song-list/update-song-list.component';
import { CreateNewOperatorComponent } from './components/8-ADMIN/7-create-new-operator/create-new-operator.component';


const routes: Routes = [
  { path: 'login',             component   : LoginComponent },
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
  // Operator Site
  { path:'operator',           component   : OperatorNavBarComponent , children: [
    { path : 'introduction',   component   : EventIntroComponent },
    { path : '',               redirectTo  : '/operator/introduction', pathMatch: 'full' },
    { path : '**',             component   : OperatorPageNotFoundComponent }
  ]
},
  // Admin Site
  { path:'admin',            component   : AdminNavBarComponent, children: [
    { path : 'upcoming',   component   : UpcomingEventsComponent },
    { path : 'newEvent',   component   : CreateNewEventComponent },
    { path : 'updateSongList',   component   : UpdateSongListComponent },
    { path : 'createNewOperator',   component   : CreateNewOperatorComponent },
    { path : '',               redirectTo  : '/admin/upcoming', pathMatch: 'full' },
    { path : '**',             component   : AdminPageNotFoundComponent} ]
},
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