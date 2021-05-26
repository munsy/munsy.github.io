import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'munsy-footer',
  template: `
<div class="h-25">
  <div class="container">
    <div class="row pt-5">
      <div class="col text-center">
        <img src="assets/images/munsylogo.svg" width="20%" height="75%" alt="Munsy.io" class="pb-3"><br>
        <span class="text-white text-uppercase fine-print">
          &copy; 2021 Munsy.io. All rights reserved.<br>
          All trademarks referenced herein are the properties of their respective owners.
        </span>
      </div>
    </div>
  </div>
</div>
`,
  styleUrls: ['../app.component.css']
})
export class FooterComponent {
  
}
