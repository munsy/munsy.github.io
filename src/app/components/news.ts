import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { NewsService, NewsPost } from '../providers/news';

@Component({
  selector: 'munsy-news',
  template: `
<div class="container">
  <div class="row pt-5">
    <div class="col text-center">
      <h2>Latest News</h2>
    </div>
  </div>
  <div class="row py-4" *ngFor="let article of articles; index as i">
    <div class="col-3 py-2 bg-dark">
      <img src="assets/images/munsylogo.svg" width="100%" height="100%">
    </div>
    <div class="col">
      <h4>{{ article.name }}</h4>
      <div class="row">
        <div class="col">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
`,
  styleUrls: ['../app.component.css']
})
export class NewsComponent implements OnInit {
    public articles: Array<NewsPost>;

    constructor(private ns: NewsService) {
      this.articles = []
    }

    ngOnInit() {
      let date = new Date();
      let month = date.getUTCMonth() + 1;
      let day = date.getUTCDate();
      let year = date.getUTCFullYear();



      this.ns.GetYears().subscribe((years: Array<NewsPosts>) => {
        for(var i = 0; i < years.length; i++){
          this.ns.GetMonths(years[i].name).subscribe((months: Array<NewsPost>) => {
            for(var j = 0; i < years.length; i++){
            this.ns.GetPosts(year[i].name, month[].name, day[].name).subscribe((posts: Array<NewsPost>) => {
              for(var k = 0; i < years.length; i++){
                this.ns.GetPost(year[i].name, month[].name, day[].name, posts[].name).subscribe((post: NewsPost) => {
                  
                });
            });
          });
        }
      })

      this.ns.GetPosts(year, month, day).subscribe((resp: Array<NewsPost>) => {
        this.articles = resp;
        console.log(resp);
        console.log(this.articles);
      });
    }
}
