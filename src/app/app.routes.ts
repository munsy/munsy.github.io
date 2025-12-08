/*
import { Routes } from '@angular/router';

export const routes: Routes = [];
*/

import { Routes } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { App } from './app';

export const routes: Routes = [
  { path: '', component: App },
  { path: 'news', component: NewsComponent },
  { path: '**', redirectTo: '' }
];
