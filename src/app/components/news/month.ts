import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NewsService, NewsPost } from '../../providers/news';

@Component({
  selector: 'munsy-news-month',
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
    <div class="row py-4 mh-25" *ngFor="let day of days; index as i">
      <div class="col text-cen">
        <a [routerLink]="[day]" class="text-decoration-none text-white text-uppercase p-0 m-0">
          <h3><strong>{{ day }}</strong></h3>
        </a>
      </div>
    </div>
  </ng-container>
</div>`,
})
export class MonthNewsComponent implements OnInit {
  public year: string;
  public month: string;
  public days: Array<string>;
  public loading: boolean;

  constructor(private ns: NewsService, private route: ActivatedRoute) {
    this.days = [];
  }

  ngOnInit() {
    this.loading = true;
    this.year = this.route.snapshot.paramMap.get('year');
    this.month = this.route.snapshot.paramMap.get('month');
    this.ns.GetDays(`news/${this.year}/${this.month}`).subscribe((days: Array<NewsPost>) => {
      for(var i = 0; i < days.length; i++) {
        if(days[i] && days[i].type == "file") {
          continue;
        }
        this.days.push(days[i].name);
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
