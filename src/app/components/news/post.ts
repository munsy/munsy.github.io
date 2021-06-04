import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NewsService, NewsPost } from '../../providers/news';

@Component({
  selector: 'munsy-news-post',
  template: `
<div class="container">
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
    <div class="row pt-5">
      <div class="col text-center">
        <h2>{{ post.title }}</h2>
      </div>
    </div>
    <div class="row py-4 mh-25">
      <div class="col text-cen" [innerHtml]="post.html">
        
      </div>
    </div>
  </ng-container>
</div>`,
})
export class NewsPostComponent implements OnInit {
  public year: string;
  public month: string;
  public day: string;
  public postid: string;
  public post: NewsPost;
  public loading: boolean;

  constructor(private ns: NewsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loading = true;
    this.year = this.route.snapshot.paramMap.get('year');
    this.month = this.route.snapshot.paramMap.get('month');
    this.day = this.route.snapshot.paramMap.get('day');
    this.postid = this.route.snapshot.paramMap.get('postid');

    this.ns.GetPost(`news/${this.year}/${this.month}/${this.day}/${this.postid}`).subscribe((post: NewsPost) => {
      this.post = this.ns.ParseHeader(post);
      console.log(this.post);
    });
    this.loading = false;
  }
}
