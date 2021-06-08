import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'munsy-games',
  template: `<router-outlet></router-outlet>`,
})
export class GamesComponent implements OnInit {
  constructor() {}
  ngOnInit(){}
}
