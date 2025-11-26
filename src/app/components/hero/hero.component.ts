import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="hero" style="display:flex;align-items:center;gap:36px;padding:48px 0;">
      <div style="flex:1;min-width:260px;">
        <h1 style="margin:0;font-size:42px;line-height:1.02;">Munsy Games</h1>
        <p class="muted" style="margin-top:10px;max-width:640px;">
          We make bold, player-first indie games with strong mechanics and memorable atmospheres.
        </p>

        <div style="margin-top:18px;display:flex;gap:12px;flex-wrap:wrap;">
          <a routerLink="/" class="nav-cta">Play the Demo</a>
          <a routerLink="/news" style="color:var(--muted);padding:10px 14px;border-radius:10px;background:var(--glass)">Latest News</a>
        </div>

        <div style="margin-top:20px;color:var(--grey);font-size:13px;">
          Available on Windows & macOS • Building for consoles
        </div>
      </div>

      <div style="width:420px;max-width:42vw;">
        <div class="banner" style="background: linear-gradient(180deg, rgba(225,43,43,0.18), rgba(0,0,0,0.3)); border-radius:12px; padding:18px;">
          <div style="height:240px;border-radius:8px;background:linear-gradient(45deg,#3b3b3b,#1b1b1b);display:flex;align-items:center;justify-content:center;color:var(--muted);">
            <div style="text-align:center;">
              <div style="font-weight:700;font-size:18px;margin-bottom:8px;">Featured: Rift Blade</div>
              <div style="opacity:0.9;">Slash between dimensions in our demo — early access March 2025</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .muted { color:var(--muted); font-size:16px;}
    @media (max-width:880px){
      .hero{flex-direction:column}
    }
  `]
})
export class HeroComponent {}
