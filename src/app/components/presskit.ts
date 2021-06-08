import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'munsy-presskit',
  template: `
<div class="container-fluid">
  <div class="row px-5">
    <div class="col-2"></div>
    <div class="col">
      <div class="row bg-black text-center">
        <div class="col">
          <img [attr.src]="'assets/images/planetstrife-logo.png'">
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h5 class="text-uppercase py-5" id="factsheet">Factsheet</h5>
          test
          <br>
          <h5 class="text-uppercase py-5" id="description">Description</h5>
          test
          <br>
          <h5 class="text-uppercase py-5" id="history">History</h5>
          test
          <br>
          <h5 class="text-uppercase py-5" id="projects">Projects</h5>
          test
          <br>
          <h5 class="text-uppercase py-5" id="videos">Videos</h5>
          test
          <br>
          <h5 class="text-uppercase py-5" id="images">Images</h5>
          test
          <br>
          <h5 class="text-uppercase py-5" id="logo-and-icon">Logo & Icon</h5>
          test
          <br>
          <h5 class="text-uppercase py-5" id="additional">Additional Links</h5>
          test
          <br>
          <h5 class="text-uppercase py-5" id="team">Team</h5>
          test
          <br>
          <h5 class="text-uppercase py-5" id="contact">Contact</h5>
          test
          <br>
        </div>
      </div>
    </div>
    <div class="col-3">
      <h3 class="text-uppercase">
        planetstrife
      </h3>
      press kit
      <br><br>
      <a class="text-uppercase text-light" routerLink="./" fragment="factsheet">Factsheet</a><br>
      <a class="text-uppercase text-light" routerLink="./" fragment="description">Description</a><br>
      <a class="text-uppercase text-light" routerLink="./" fragment="history">History</a><br>
      <a class="text-uppercase text-light" routerLink="./" fragment="projects">Projects</a><br>
      <a class="text-uppercase text-light" routerLink="./" fragment="videos">Videos</a><br>
      <a class="text-uppercase text-light" routerLink="./" fragment="images">Images</a><br>
      <a class="text-uppercase text-light" routerLink="./" fragment="logo-and-icon">Logo & Icon</a><br>
      <a class="text-uppercase text-light" routerLink="./" fragment="additional">Additional Links</a><br>
      <a class="text-uppercase text-light" routerLink="./" fragment="team">Team</a><br>
      <a class="text-uppercase text-light" routerLink="./" fragment="contact">Contact</a><br>
    </div>
  </div>
</div>
  `,
})
export class PressKitComponent implements OnInit {
  constructor() {}
  ngOnInit(){}
}
