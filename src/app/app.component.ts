import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<munsy-nav></munsy-nav>
<router-outlet></router-outlet>
<munsy-footer></munsy-footer>
<munsy-cookies></munsy-cookies>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
