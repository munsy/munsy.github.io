import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturedGameComponent } from './components/featured-game/featured-game.component';
import { GamesGridComponent } from './components/games-grid/games-grid.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    FeaturedGameComponent,
    GamesGridComponent,
    FooterComponent
  ],
  template: `
    <div class="app-shell">
      <app-header></app-header>

      <main style="flex:1;">
        <section class="container" style="padding-top:36px;">
          <app-hero></app-hero>
        </section>

        <section style="padding:48px 0;">
          <div class="container">
            <app-featured-game></app-featured-game>
          </div>
        </section>

        <section style="padding:24px 0;">
          <div class="container">
            <app-games-grid></app-games-grid>
          </div>
        </section>
      </main>

      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    :host { display:block; }
  `]
})
export class AppComponent {}
