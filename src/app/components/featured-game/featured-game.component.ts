import { Component, computed, inject } from '@angular/core';

import { DataService } from '../../data.service';

@Component({
    selector: 'app-featured-game',
    imports: [],
    template: `
    <section class="featured">
      <div class="featured-inner">
        <div class="left">
          <h2>{{ game().title }}</h2>
          <div class="tagline">{{ game().tagline }}</div>
          <p class="desc">{{ game().description }}</p>
    
          <div style="margin-top:14px;">
            <span class="pill">Release: {{ game().release }}</span>
            @for (t of game().tags; track t) {
              <span class="pill" style="margin-left:8px;">{{t}}</span>
            }
          </div>
        </div>
    
        <div class="right">
          <!-- placeholder art -->
          <div class="art">
            <div class="art-inner">
              <!-- ART PREVIEW -->
              <img [src]="game().image || '/assets/images/placeholder.png'" alt="game art">
            </div>
          </div>
          <div style="margin-top:10px;">
            <button class="nav-cta">Download Demo</button>
            <button style="margin-left:10px;background:transparent;border:1px solid rgba(255,255,255,0.06);padding:8px 12px;border-radius:8px;color:var(--muted)">Wishlist</button>
          </div>
        </div>
      </div>
    </section>
    `,
    styles: [`
    .featured { background: linear-gradient(180deg, rgba(255,255,255,0.02), transparent); padding:24px; border-radius:12px;}
    .featured-inner { display:flex; gap:18px; align-items:center; justify-content:space-between; }
    .left { flex:1; min-width:240px; }
    .right { width:320px; display:flex; flex-direction:column; align-items:flex-end; }
    .tagline { color:var(--accent); font-weight:700; margin-top:6px; }
    .desc { color:var(--muted); margin-top:14px; max-width:56ch; }
    .art { width:320px; height:180px; border-radius:10px; background:linear-gradient(135deg,#1b1b1b,#2d2d2d); display:flex; align-items:center; justify-content:center; color:var(--muted); }
    .pill { background: rgba(255,255,255,0.03); padding:6px 10px; border-radius:10px; font-size:13px; color:var(--muted) }
    @media (max-width:880px){
      .featured-inner { flex-direction:column; align-items:flex-start; }
      .right { width:100%; align-items:flex-start; }
      .art { width:100% }
    }
  `]
})
export class FeaturedGameComponent {
  private ds = inject(DataService);
  game = computed(() => this.ds.games()[0]); // first game as featured
}
