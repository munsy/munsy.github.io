import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NewsService, NewsPost } from '../../providers/news';

const showdown = require('showdown');

@Component({
  selector: 'munsy-news-year',
  template: `
<div class="container">
  <div class="row pt-5">
    <div class="col text-center">
      <h2>News - {{ year }}</h2>
    </div>
  </div>
  <ng-container *ngIf="loading">
    <div class="row py-4">
      <div class="col text-center py-2">
        <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
          <span class="visually-hidden">&nbsp;</span>
        </div>
      </div>
    </div>
  </ng-container>
  <ng-container *ngIf="!loading">
    <div class="row py-4 mh-25" *ngFor="let month of months; index as i">
      <div class="col text-cen">
        <a [routerLink]="[month]" class="text-decoration-none text-white text-uppercase p-0 m-0">
          <h3><strong>{{ getMonth(month) }}</strong></h3>
        </a>
      </div>
    </div>
  </ng-container>
</div>`,
})
export class YearNewsComponent implements OnInit {
  public year: string;
  public months: Array<string>;
  public loading: boolean;

  constructor(private ns: NewsService, private route: ActivatedRoute) {
    this.months = [];
  }

  ngOnInit() {
    this.loading = true;
    this.year = this.route.snapshot.paramMap.get('year');
    this.ns.GetMonths(`news/${this.year}`).subscribe((months: Array<NewsPost>) => {
      for(var i = 0; i < months.length; i++) {
        if(months[i] && months[i].type == "file") {
          continue;
        }
        this.months.push(months[i].name);
      }
      this.loading = false;
    });
  }

  public getMonth(month: string) {
    switch(month) {
      case "1": {
        return "January";
      }
      case "2": {
        return "February";
      }
      case "3": {
        return "March";
      }
      case "4": {
        return "April";
      }
      case "5": {
        return "May";
      }
      case "6": {
        return "June";
      }
      case "7": {
        return "July";
      }
      case "8": {
        return "August";
      }
      case "9": {
        return "September";
      }
      case "10": {
        return "October";
      }
      case "11": {
        return "November";
      }
      case "12": {
        return "December";
      }
      default: {
        return "";
      }
    }
  }
}
