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
            {{ article.content }}
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
      this.ns.GetYears().subscribe((years: Array<NewsPosts>) => {
        for(var i = 0; i < years.length && this.articles.length < 10; i++){
          this.ns.GetMonths(years[i].name).subscribe((months: Array<NewsPost>) => {
            for(var j = 0; j < months.length && this.articles.length < 10; j++){
              this.ns.GetDays(year[i].name, month[j].name).subscribe((days: Array<NewsPost>) => {
                for(var k = 0; k < days.length && this.articles.length < 10; k++){
                  this.ns.GetPosts(year[i].name, month[j].name, days[k].name).subscribe((posts: Array<NewsPost>) => {
                    for(var l = 0; l < posts.length && this.articles.length < 10; l++){
                      this.ns.GetPost(year[i].name, month[j].name, days[k].name, posts[l].name).subscribe((post: NewsPost) => {
                        post.content = post.content.replace("\n", "");
                        post.content = Buffer.from(post.content, 'base64').toString('binary');
                        this.articles.push(post);
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
