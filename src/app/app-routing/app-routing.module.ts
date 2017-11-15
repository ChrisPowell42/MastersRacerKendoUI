import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontPageNewsResolverService } from './front-page-news-resolver.service';
import { NextRaceEventsResolverService } from './next-race-events-resolver.service';

import { HomeComponent } from '../home-page/home/home.component';
import { CallbackComponent } from '../callback/callback.component';
import { PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import { NotAuthorizedComponent } from '../not-authorized/not-authorized.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, resolve: {newsItemsList: FrontPageNewsResolverService,
                                                      nextEventsList: NextRaceEventsResolverService} },
  { path: 'callback', component: CallbackComponent },
  { path: 'notauthorized', component: NotAuthorizedComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
