import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'munsy-nav',
  template: `
<nav class="navbar navbar-inverse navbar-expand-md">
  <ul class="nav navbar-nav mr-auto">
    <li class="nav-item">
      <a class="nav-link" href="https://munsy.io">
        <img src="assets/images/munsylogo.svg" width="50%" height="50%" alt="Munsy.io">
      </a>
    </li>
    <li class="nav-item px-2 pt-1">
      <a class="nav-link text-white text-uppercase" href="https://munsy.io/about/">
        <strong>about</strong>
      </a>
    </li>
    <li class="nav-item px-2 pt-1">
      <a class="nav-link text-white text-uppercase" href="https://munsy.io/news/">
        <strong>news</strong>
      </a>
    </li>
    <li class="nav-item px-2 pt-1">
      <a class="nav-link text-white text-uppercase" href="https://shop.munsy.io">
        <strong>shop</strong>
      </a>
    </li>
  </ul>
</nav>
`,
  styleUrls: ['../app.component.css']
})
export class NavComponent {

}
