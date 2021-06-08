import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'munsy-games-planetstrife',
  template: `
<div class="container">
  <h1 class="text-uppercase text-center pt-5">planetstrife: war of times</h1>
  <div class="text-center">
    <div class="align-middle">
      <span class="text-uppercase">
        Details coming soon...
      </span>
    </div>
  </div>
</div>
  `,
})
export class PlanetstrifeGamesComponent implements OnInit {
  constructor() {}
  ngOnInit(){}
}
