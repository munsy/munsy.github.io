import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../data.service';

@Component({
    selector: 'app-news',
    imports: [CommonModule],
    template: `
    <div class="container" style="padding:36px 24px;">
      <h2>News & Updates</h2>
      <p style="color:var(--muted);margin-top:6px;">Latest from Munsy Games</p>

      <div style="margin-top:18px;display:flex;flex-direction:column;gap:12px;">
        <div class="news-card" *ngFor="let n of news()">
          <div style="display:flex;justify-content:space-between;">
            <div>
              <div style="font-weight:700;">{{ n.title }}</div>
              <div style="color:var(--muted);font-size:13px;margin-top:6px;">{{ n.excerpt }}</div>
            </div>
            <div style="color:var(--muted);font-size:13px;">{{ n.date }}</div>
          </div>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .news-card {
      padding:16px;
      background:var(--panel);
      border-radius:10px;
      border:1px solid rgba(255,255,255,0.02);
    }
  `]
})
export class NewsComponent {
  private ds = inject(DataService);

  /** SIGNAL — must remain a signal so template can call `news()` */
  news = this.ds.news;
}
