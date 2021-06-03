import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { NewsService, NewsPost } from '../providers/news';

const showdown = require('showdown');

@Component({
  selector: 'munsy-news',
  template: `
<div class="container">
  <div class="row pt-5">
    <div class="col text-center">
      <h2>Latest News</h2>
    </div>
  </div>
  <ng-container *ngIf="loading">
    <div class="row py-4">
      <div class="col text-center py-2 bg-dark">
        <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
          <span class="visually-hidden">&nbsp;</span>
        </div>
      </div>
    </div>
  </ng-container>
  <ng-container *ngIf="!loading">
    <div class="row py-4" *ngFor="let article of articles; index as i">
      <div class="col-3 py-2 bg-dark">
        <img src="assets/images/munsylogo.svg" width="100%" height="100%">
      </div>
      <div class="col">
        <h4>{{ article.name }}</h4>
        <div class="row">
          <div class="col-12 text-truncate">
            <div [innerHtml]="article.content"></div>
          </div>
        </div>
      </div>
    </div>
  </ng-container>
</div>
`,
  styleUrls: ['../app.component.css']
})
export class NewsComponent implements OnInit {
    public articles: Array<NewsPost>;
    public loading: boolean;

    constructor(private ns: NewsService) {
      this.articles = []
    }

    ngOnInit() {
      const converter = new showdown.Converter();
      this.loading = true;
      this.ns.GetYears().subscribe((years: Array<NewsPost>) => {
        console.log(years);
        for(var i = 0; i < years.length; i++){
          if(this.articles.length >= 1) {
            this.loading = false;
            break;
          }
          if(years[i] && years[i].type == "file") {
            continue;
          }
          this.ns.GetMonths(years[i].path).subscribe((months: Array<NewsPost>) => {
            console.log(months);
            for(var j = 0; j < months.length; j++){
              if(this.articles.length >= 1) {
                this.loading = false;
                break;
              }
              if(months[j] && months[j].type == "file") {
                continue;
              }
              this.ns.GetDays(months[j].path).subscribe((days: Array<NewsPost>) => {
                console.log(days);
                for(var k = 0; k < days.length; k++){
                  if(this.articles.length >= 1) {
                    this.loading = false;
                    break;
                  }
                  if(days[k] && days[k].type == "file") {
                    continue;
                  }
                  this.ns.GetPosts(days[k].path).subscribe((posts: Array<NewsPost>) => {
                    console.log(posts);
                    for(var l = 0; l < posts.length; l++){
                      if(this.articles.length >= 1) {
                        this.loading = false;
                        break;
                      }
                      if(posts[l] && posts[l].type != "file") {
                        continue;
                      }
                      this.ns.GetPost(posts[l].path).subscribe((post: NewsPost) => {
                        console.log(post);
                        post.content = converter.makeHtml(Buffer.from(post.content, 'base64').toString('binary'));
                        this.articles.push(post);
                        if(this.articles.length >= 1) {
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
      });

      // this.ns.GetPosts(year, month, day).subscribe((resp: Array<NewsPost>) => {
      //   this.articles = resp;
      //   console.log(resp);
      //   console.log(this.articles);
      // });
    }
}
