import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [RouterLink],
    template: `
    <header style="border-bottom:1px solid rgba(255,255,255,0.03);">
      <div class="container" style="display:flex;align-items:center;justify-content:space-between;padding:18px 0;">
        <a routerLink="/" class="brand row" style="gap:12px;align-items:center;">
          <div class="logo" aria-hidden="true" [innerHTML]="logoSvg"></div>
          <div>
            <div style="font-weight:700;font-size:18px;">Munsy Games</div>
            <div style="font-size:12px;color:var(--muted);margin-top:2px;">Play bolder.</div>
          </div>
        </a>

        <nav class="row" style="gap:18px;">
          <a routerLink="/" class="nav-link">Home</a>
          <a routerLink="/news" class="nav-link">News</a>
          <a class="nav-cta" href="#" (click)="$event.preventDefault()">Contact</a>
        </nav>
      </div>
    </header>
  `,
    styles: [`
    .logo svg { width:48px; height:48px; display:block; }
    .nav-link { color:var(--muted); font-weight:600; }
    .nav-link:hover { color:var(--white); }
    .nav-cta {
      background: linear-gradient(90deg, var(--accent), #ff6b6b);
      padding:8px 12px;
      border-radius:8px;
      color:var(--white);
      font-weight:700;
      box-shadow: 0 6px 18px rgba(225,43,43,0.12);
    }
  `]
})
export class HeaderComponent {
  logoSvg = `
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <rect width="64" height="64" rx="12" fill="#111" />
      <path d="M16 44L32 12L48 44H16Z" fill="#e12b2b"/>
      <path d="M24 36H40L32 20L24 36Z" fill="#fff" opacity="0.06"/>
    </svg>
  `;
}
