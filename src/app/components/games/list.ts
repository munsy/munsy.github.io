import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'munsy-games-list',
  template: `
<div class="container">
  <h1 class="text-uppercase pt-5">our games</h1>
  <div class="d-flex">
    <div class="align-middle">
      <span class="text-uppercase text-center">
        <a [routerLink]="['planetstrife']" class="text-decoration-none text-white">planetstrife: war of times</a>
      </span>
    </div>
  </div>
</div>`,
})
export class GamesListComponent implements OnInit {
  constructor() {}
  ngOnInit(){}
}
