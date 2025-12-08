/*
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('munsy.github.io');
}

*/

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturedGameComponent } from './components/featured-game/featured-game.component';
import { GamesGridComponent } from './components/games-grid/games-grid.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-root',
    imports: [
	    RouterOutlet,

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
  styleUrl: './app.css'
/*
    styles: [`
    :host { display:block; }
  `]
*/
})
export class App {
  protected readonly title = signal('munsy.github.io');
}
//export class AppComponent {}
