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
  <div class="row py-5 border-bottom border-white">
    <div class="col-1"></div>
    <div class="col">
      <div class="d-flex">
        <img src="https://munsyio.s3-us-west-2.amazonaws.com/tim-munson.jpg" width="250px" height="250px" class="rounded align-self-center">
        <span class="align-self-center">
          <h4>Tim Munson</h4>
          <p>
            Before turning to video game development, Tim earned his Bachelor of Science 
            in Computer Science from Washington State University, and worked as a software developer in the finance industry. 
            While he found finance to be extremely soul-sucking, he always looked forward to the weekends and evenings, when 
            he could log on and play video games with his friends.
          </p>
          <p>
            Through various popular games such as Starcraft, Warcraft, and Final Fantasy, Tim has met and become friends with people from
            many different parts of the world. Several of these friendships have led to the establishment of different guilds and organizations, 
            each with varying degrees of success. 
          </p>
        </span>
      </div>
    </div>
    <div class="col-1"></div>
  </div>
</div>`,
})
export class AboutComponent implements OnInit {
  
  constructor() {}

  ngOnInit() {

  }
}
