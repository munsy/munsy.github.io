import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home';
import { AboutComponent } from './components/about';
import { GamesComponent } from './components/games/games';
import { GamesListComponent } from './components/games/list';
import { PlanetstrifeGamesComponent } from './components/games/planetstrife';
import { NewsComponent } from './components/news/news';
import { RecentNewsComponent } from './components/news/recent';
import { YearNewsComponent } from './components/news/year';
import { MonthNewsComponent } from './components/news/month';
import { DayNewsComponent } from './components/news/day';
import { NewsPostComponent } from './components/news/post';
import { PressKitComponent } from './components/presskit';
import { NotFoundComponent } from './components/notfound';

const routes: Routes = [
  { path: 'games', component: GamesComponent, children: [
    { path: '', component: GamesListComponent },
    { path: 'planetstrife', component: PlanetstrifeGamesComponent },
  ] },
  { path: 'news', component: NewsComponent, children: [
  	{ path: '', component: RecentNewsComponent },
  	{ path: ':year', component: YearNewsComponent},
  	{ path: ':year/:month', component: MonthNewsComponent},
  	{ path: ':year/:month/:day', component: DayNewsComponent},
  	{ path: ':year/:month/:day/:postid', component: NewsPostComponent},
  ] },
  { path: 'about', component: AboutComponent },
  { path: 'press', component: PressKitComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
