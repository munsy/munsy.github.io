import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';

import { EmailService } from '../providers/email';

@Component({
  selector: 'home',
  template: `
<div class="h-75" id="planetstrife">
  <div id="carousel-munsy-slide" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block mx-auto" src="assets/images/planetstrife-logo.png">
        <div class="carousel-caption d-none d-md-block">
          <p>A Real-Time Strategy game coming soon.</p>
          <!--a class="btn btn-lg btn-secondary rounded-0 mx-3 px-3 text-uppercase" href="https://munsy.io/planetstrife/"><i class="fab fa-steam"></i>&nbsp;Pre-Order On Steam</a-->
          <a class="btn btn-lg btn-secondary rounded-0 mx-3 px-3 text-uppercase" href="https://planetstrife.munsy.io/">Learn More</a>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="bg-dark">&nbsp;</div>
<div class="h-50 text-white">
  <div class="container pt-5">
    <div class="row">
      <div class="col text-center">
        <h2 class="text-uppercase">building worlds together</h2>
      </div>
    </div>
    <div class="row pt-5">
      <div class="col">
        <p>
          Munsy.io was founded in 2019 by Tim Munson. Before turning to video game development, Tim earned his Bachelor of Science 
          in Computer Science from Washington State University, and worked as a software developer in the finance industry. 
          While he found finance to be extremely soul-sucking, he always looked forward to the weekends and evenings, when 
          he could log on and play video games with his friends.
        </p>
        <p>
          Through various popular games such as Starcraft, Warcraft, and Final Fantasy, Tim has met and become friends with people from
          many different parts of the world. Several of these friendships have led to the establishment of different guilds and organizations, 
          each with varying degrees of success. 
        </p>
        <p>
          Now, through Munsy.io, he's taking the next step, and is using his passion for video games and software development as the fuel to 
          construct new worlds, create fascinating characters, and tell awe-inspiring tales. We're excited to have you along for the ride!
        </p>
      </div>
    </div>
  </div>
</div>
<div class="h-50 bg-danger">
  <div class="container-fluid">
    <div class="row pt-5">
      <div class="col text-center">
        <h2 class="text-uppercase">stay informed</h2>
      </div>
    </div>
    <div class="row pt-2">
      <div class="col-3"></div>
      <div class="col-6">
    		<form class="form">
    		  <input type="email" class="form-control form-control-sm" placeholder="yourname@email.com" [(ngModel)]="subEmail" [ngModelOptions]="{ standalone: true }">
          <div class="text-left pt-2">
            <small>
              Munsy.io uses <strong>Mailchimp</strong> as our marketing platform. 
              By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing.
              Learn more about Mailchimp's privacy practices here.
            </small>
          </div>
          <div class="text-center pt-2">
            <input class="form-check-input" type="checkbox" value="" aria-label="Confirm email opt-in">Yes, I'd like to receive emails from Munsy.io.
          </div>
          <div class="text-center pt-2">
            <small>
              <em>You can unsubscribe at any time by clicking the link in the footer of our emails</em>.
            </small>
          </div>
          <div class="text-center pt-2">
            <button type="button" class="btn btn-sm btn-light" (click)="subToMailingList()">Subscribe</button>
          </div>
    		</form>
    		<small class="d-inline" *ngIf="justSubbed">A confirmation email has been sent to {{ subEmail }}!</small>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</div>
<!--div class="container">
  <div id="cookie-alert" class="alert alert-dark alert-dismissible fade show fixed-bottom text-center" role="alert" *ngIf="!isOptedInCookies()">
    <small class="cookie-disclaimer">
      <span>
        <strong>We use cookies</strong> to personalise content/ads, enhance our social media, and analyse traffic. We may share information about your use of our site to our social media, advertising, and analytics partners who may combine it with other information you've provided to them or they've collected from your use of their services.
      </span>
      <div class="d-inline px-auto"></div>
      <button type="button" class="ml-1 btn btn-sm btn-outline-dark border-0" [routerLink]="['cookie-policy']" data-toggle="tooltip" matTooltip="Read more on our cookie policy." [matTooltipPosition]="'above'">
        <i class="fa fa-question-circle"></i>
      </button>
      <button type="button" class="btn btn-sm btn-outline-dark border-0" (click)="optin()" data-toggle="tooltip" matTooltip="Enable cookies on Let'sWorkRemote.ly!" [matTooltipPosition]="'above'">
        <i class="fa fa-check"></i>
      </button>
      <button type="button" class="btn btn-sm btn-outline-dark border-0" (click)="optout()" data-toggle="tooltip" matTooltip="Disable cookies on Let'sWorkRemote.ly!" [matTooltipPosition]="'above'">
        <i class="fas fa-ban"></i>
      </button>
      <button type="button" class="btn btn-sm btn-outline-dark border-0" data-dismiss="alert" aria-label="Close" data-toggle="tooltip" matTooltip="I'll decide what to do later." [matTooltipPosition]="'above'">
        <i class="fa fa-times"></i>
      </button>
    </small>
  </div>
</div-->`,
  styleUrls: ['../app.component.css']
})
export class HomeComponent {
  public form: FormGroup;
  public subEmail: string;
  public justSubbed: boolean;

  constructor(private fb: FormBuilder, private es: EmailService) {

  }

  subToMailingList() {
    this.es.SubToMailingList(this.subEmail).subscribe(() => {
      this.justSubbed = true;
    }, error => {
      // handle
    });
  }
}
