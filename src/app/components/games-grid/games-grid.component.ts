import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../data.service';
import type { Game } from '../../models';

@Component({
    selector: 'app-games-grid',
    imports: [CommonModule],
    template: `
    <div>
      <h3 style="margin-top:0;">Our Games</h3>
      <p style="color:var(--muted);margin-top:6px;">Current & upcoming titles from Munsy Games</p>

      <div class="grid" style="margin-top:18px;">
        <div class="card" *ngFor="let g of games()">
          <div class="thumb">
            <div class="thumb-inner">{{ g.title }}</div>
          </div>
          <div class="card-body">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;">
              <div>
                <div style="font-weight:700;">{{ g.title }}</div>
                <div style="color:var(--muted);font-size:13px;margin-top:6px;">{{ g.tagline }}</div>
              </div>
              <div style="color:var(--muted);font-size:13px;">{{ g.release }}</div>
            </div>

            <p style="color:var(--muted);margin-top:12px;font-size:14px;">{{ g.description }}</p>

            <div style="margin-top:12px;">
              <button style="background:transparent;border:1px solid rgba(255,255,255,0.06);padding:8px 12px;border-radius:8px;color:var(--muted)">Learn</button>
            </div>
          </div>
        </div>

        <!-- placeholder card for future games -->
        <div class="card add" *ngIf="games().length < 6">
          <div style="padding:18px;color:var(--muted)">Add more games — slots available</div>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:12px; }
    .card { background:var(--panel); border-radius:12px; padding:12px; display:flex; flex-direction:column; gap:10px; min-height:200px; }
    .thumb { height:110px; border-radius:8px; overflow:hidden; background:linear-gradient(135deg,#2a2a2a,#111); display:flex; align-items:center; justify-content:center; color:var(--muted) }
    .thumb-inner { font-weight:700; color:var(--white); opacity:0.12; font-size:18px; letter-spacing:1px; }
    .add { background: linear-gradient(180deg, rgba(255,255,255,0.01), transparent); border:1px dashed rgba(255,255,255,0.03); }
    @media (max-width:1100px){
      .grid{grid-template-columns:repeat(2,1fr)}
    }
    @media (max-width:680px){
      .grid{grid-template-columns:1fr}
    }
  `]
})
export class GamesGridComponent {
  private ds = inject(DataService);
  games = this.ds.games;
}
