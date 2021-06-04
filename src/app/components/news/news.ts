import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { NewsService, NewsPost } from '../../providers/news';

const showdown = require('showdown');

@Component({
  template: `<router-outlet></router-outlet>`,
})
export class NewsComponent implements OnInit {
    constructor(){}
    ngOnInit(){}
}
