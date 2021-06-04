import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'munsy-about',
  template: `
<div class="container">
  <div class="row pt-5">
    <div class="col-1"></div>
    <div class="col pb-5 text-center border-bottom border-white">
      <h1 class="text-uppercase">about munsy.io</h1>
    </div>
    <div class="col-1"></div>
  </div>
  <div class="row pt-5">
    <div class="col-1"></div>
    <div class="col pb-5 text-center border-bottom border-white">
      <h1 class="text-uppercase">about munsy.io</h1>
    </div>
  </div>
</div>`,
})
export class AboutComponent implements OnInit {
  
  constructor() {}

  ngOnInit() {

  }
}
