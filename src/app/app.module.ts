import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTooltipModule } from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CookiesComponent } from './components/cookies';
import { HomeComponent } from './components/home';
import { FooterComponent } from './components/footer';
import { NavComponent } from './components/nav';
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

import { BrowserStorageService } from './providers/storage';
import { EmailService } from './providers/email';
import { NewsService } from './providers/news';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GamesComponent,
    GamesListComponent,
    PlanetstrifeGamesComponent,
    CookiesComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
    NewsComponent,
    NewsPostComponent,
    YearNewsComponent,
    MonthNewsComponent,
    DayNewsComponent,
    RecentNewsComponent,
    PressKitComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    MatTooltipModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    BrowserStorageService,
    EmailService,
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
