import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { NewsService, NewsPost } from '../../providers/news';

const showdown = require('showdown');

@Component({
  selector: 'munsy-news-recent',
  template: `
<div class="container">
  <div class="row pt-5">
    <div class="col text-center">
      <h2>Recent News</h2>
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
    <div class="row py-4 mh-25" *ngFor="let article of articles(); index as i">
      <div class="col-3 py-2 bg-dark">
        <img [src]="article.teaser_image" width="100%" height="100%">
      </div>
      <div class="col-9">
        <h3 class="d-inline pr-2">{{ article.title }}</h3>
        <h6 class="d-inline pl-2">{{ article.date }}</h6>
        <div class="row">
          <div class="col">
            <p class="article-summary">{{ article.description }}</p>
            <a [routerLink]="[article.year, article.month, article.day, article.postid]" class="text-decoration-none text-white text-uppercase p-0 m-0"><strong>read full article</strong></a>
          </div>
        </div>
      </div>
    </div>
  </ng-container>
</div>`,
})
export class RecentNewsComponent implements OnInit {
    public loading: boolean;

    constructor(private ns: NewsService) {}

    public articles(): Array<NewsPost> {
      return this.ns.articles.sort((a, b: NewsPost) => {
        if(+a.year > +b.year) {
          return 1;
        }
        if(+a.year < +b.year) {
          return -1;
        }
        if(+a.month > +b.month) {
          return 1;
        }
        if(+a.month < +b.month) {
          return -1;
        }
        if(+a.day > +b.day) {
          return 1;
        }
        if(+a.day < +b.day) {
          return -1;
        }
        if(+a.postid > +b.postid) {
          return 1;
        }
        if(+a.postid < +b.postid) {
          return -1;
        }
        return 0;
      }).reverse();
    }

    ngOnInit() {
      const MAX_POSTS_LENGTH = 10;
      if(this.ns.articles.length >= MAX_POSTS_LENGTH) {
        this.loading = false;
        return;
      }
      this.loading = true;
      this.ns.GetYears().subscribe((years: Array<NewsPost>) => {
        for(var i = 0; i < years.length; i++){
          if(this.ns.articles.length >= MAX_POSTS_LENGTH) {
            this.loading = false;
            break;
          }
          if(years[i] && years[i].type == "file") {
            continue;
          }
          this.ns.GetMonths(years[i].path).subscribe((months: Array<NewsPost>) => {
            for(var j = 0; j < months.length; j++){
              if(this.ns.articles.length >= MAX_POSTS_LENGTH) {
                this.loading = false;
                break;
              }
              if(months[j] && months[j].type == "file") {
                continue;
              }
              this.ns.GetDays(months[j].path).subscribe((days: Array<NewsPost>) => {
                for(var k = 0; k < days.length; k++){
                  if(this.ns.articles.length >= MAX_POSTS_LENGTH) {
                    this.loading = false;
                    break;
                  }
                  if(days[k] && days[k].type == "file") {
                    continue;
                  }
                  this.ns.GetPosts(days[k].path).subscribe((posts: Array<NewsPost>) => {
                    for(var l = 0; l < posts.length; l++){
                      if(this.ns.articles.length >= MAX_POSTS_LENGTH) {
                        this.loading = false;
                        break;
                      }
                      if(posts[l] && posts[l].type != "file") {
                        continue;
                      }
                      this.ns.GetPost(posts[l].path).subscribe((post: NewsPost) => {
                        post = this.ns.ParseHeader(post);
                        console.log(post);
                        this.ns.articles.push(post);
                        if(this.ns.articles.length >= MAX_POSTS_LENGTH) {
                          this.loading = false;
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
        this.loading = false;
      });
    }
}
