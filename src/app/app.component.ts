import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';

import { EmailService } from './providers/email';

@Component({
  selector: 'app-root',
  template: `
<nav class="navbar navbar-inverse navbar-expand-md">
  <ul class="nav navbar-nav mr-auto">
    <li class="nav-item">
      <a class="nav-link text-center" href="https://munsy.io">
        <img src="assets/images/munsyio.png" width="50%" height="50%" alt="Munsy.io">
      </a>
    </li>
    <li class="nav-item px-2 pt-1">
      <a class="nav-link text-white text-uppercase" href="https://munsy.io/about/">
        <strong>about</strong>
      </a>
    </li>
    <li class="nav-item px-2 pt-1">
      <a class="nav-link text-white text-uppercase" href="https://shop.munsy.io">
        <strong>store</strong>
      </a>
    </li>
    <li class="nav-item px-2 pt-1">
      <a class="nav-link text-white text-uppercase" href="https://news.munsy.io">
        <strong>news</strong>
      </a>
    </li>
    <li class="nav-item px-2 pt-1">
      <a class="nav-link text-white text-uppercase" href="https://careers.munsy.io">
        <strong>careers</strong>
      </a>
    </li>
    <li class="nav-item px-2 pt-1">
      <a class="nav-link text-white text-uppercase" href="https://support.munsy.io">
        <strong>support</strong>
      </a>
    </li>
  </ul>
</nav>
<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public form: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  subToMailingList() {
    this.js.SubToMailingList(this.subName, this.subEmail).subscribe(() => {
      this.settings.isOptedIn = true;
      this.settings.returningUser = true;
      this.bss.set('emails-opt-in', JSON.stringify(this.settings));
      this.justSubbed = true;
    }, error => {

    });
  }
}
