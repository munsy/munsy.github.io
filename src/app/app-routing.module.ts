import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home';
import { NewsComponent } from './components/news/news';
import { RecentNewsComponent } from './components/news/recent';
import { YearNewsComponent } from './components/news/year';
import { MonthNewsComponent } from './components/news/month';
import { DayNewsComponent } from './components/news/day';
import { NewsPostComponent } from './components/news/post';
import { NotFoundComponent } from './components/notfound';

const routes: Routes = [
  { path: 'news', component: NewsComponent, children: [
  	{ path: '', component: RecentNewsComponent },
  	{ path: ':year', component: YearNewsComponent},
  	{ path: ':year/:month', component: MonthNewsComponent},
  	{ path: ':year/:month/:day', component: DayNewsComponent},
  	{ path: ':year/:month/:day/:postid', component: NewsPostComponent},
  ] },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
