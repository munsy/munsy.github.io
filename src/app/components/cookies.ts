import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';

import { BrowserStorageService, MunsyioCookieSettings } from '../providers/storage';

@Component({
  selector: 'munsy-cookies',
  template: `
<div class="container">
  <div id="cookie-alert" class="alert alert-dismissible bg-dark fade show fixed-bottom text-center" role="alert" *ngIf="!isOptedInCookies()">
    <small class="cookie-disclaimer">
      <span>
        <strong>We use cookies</strong> to personalise content/ads, enhance our social media, and analyse traffic. We may share information about your use of our site to our social media, advertising, and analytics partners who may combine it with other information you've provided to them or they've collected from your use of their services.
      </span>
      <div class="d-inline px-auto"></div>
      <button type="button" class="ml-1 btn btn-sm btn-outline-light border-0" [routerLink]="['cookie-policy']" data-toggle="tooltip" matTooltip="Read more on our cookie policy." [matTooltipPosition]="'above'">
        <i class="fa fa-question-circle"></i>
      </button>
      <button type="button" class="btn btn-sm btn-outline-light border-0" (click)="optin()" data-toggle="tooltip" matTooltip="Enable cookies on Let'sWorkRemote.ly!" [matTooltipPosition]="'above'">
        <i class="fa fa-check"></i>
      </button>
      <button type="button" class="btn btn-sm btn-outline-light border-0" (click)="optout()" data-toggle="tooltip" matTooltip="Disable cookies on Let'sWorkRemote.ly!" [matTooltipPosition]="'above'">
        <i class="fas fa-ban"></i>
      </button>
      <button type="button" class="btn btn-sm btn-outline-light border-0" data-dismiss="alert" aria-label="Close" data-toggle="tooltip" matTooltip="I'll decide what to do later." [matTooltipPosition]="'above'">
        <i class="fa fa-times"></i>
      </button>
    </small>
  </div>
</div>
`,
  styleUrls: ['../app.component.css']
})
export class CookiesComponent {
  public settings: MunsyioCookieSettings;
  constructor(private bss: BrowserStorageService){}

  public isOptedInCookies(): boolean {
    this.settings = JSON.parse(this.bss.get('cookies-opt-in'));
    if(!this.settings) {
      this.settings = new MunsyioCookieSettings();
      return false;
    }
    return this.settings.returningUser == true || this.settings.isOptedIn == true;
  }

  public optin() {
    this.settings.isOptedIn = true;
    this.settings.returningUser = true;
    this.bss.set('cookies-opt-in', JSON.stringify(this.settings));
    $('#cookie-alert').alert('close');
  }

  public optout() {
    this.settings.isOptedIn = false;
    this.settings.returningUser = true;
    this.bss.set('cookies-opt-in', JSON.stringify(this.settings));
    $('#cookie-alert').alert('close');
  }
}
