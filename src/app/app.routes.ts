// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'news', component: NewsComponent },
  { path: '**', redirectTo: '' }
];
