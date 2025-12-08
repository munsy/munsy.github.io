import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    imports: [],
    template: `
    <footer style="border-top:1px solid rgba(255,255,255,0.03);padding:28px 0;margin-top:36px;">
      <div class="container" style="display:flex;justify-content:space-between;gap:12px;align-items:center;">
        <div style="display:flex;flex-direction:column;">
          <div style="font-weight:700">Munsy Games</div>
          <div style="color:var(--muted);font-size:13px;margin-top:6px">© Munsy Games • Built with ❤️</div>
        </div>

        <div style="display:flex;gap:12px;align-items:center;">
          <a style="color:var(--muted);font-size:13px" href="#">Privacy</a>
          <a style="color:var(--muted);font-size:13px" href="#">TOS</a>
          <a style="color:var(--muted);font-size:13px" href="#">Contact</a>
        </div>
      </div>
    </footer>
  `,
    styles: []
})
export class FooterComponent {}
