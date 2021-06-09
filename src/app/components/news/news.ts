import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

import { NewsService, NewsPost } from '../../providers/news';

const showdown = require('showdown');

@Component({
  selector: "munsy-news",
  template: `<router-outlet *ngIf="!maxNumPosts"></router-outlet>
<div *ngIf="maxNumPosts">
  	<div class="text-center" *ngIf="loading">
  		<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
        	<span class="visually-hidden">&nbsp;</span>
        </div>
    </div>
    <div class="d-inline" *ngIf="!loading">
	  	<h2 class="text-center text-uppercase">recent news</h2>
	  	<div class="d-flex justify-content-center">
	  		<div *ngIf="error">An error occurred.</div>
	  			{{ maxNumPosts }}
	  		<div *ngFor="let post of posts; index as i">
	  			{{ post.title }} 
	  		</div>
	  	</div>
    </div>
</div>
  `,
})
export class NewsComponent implements OnInit {
    @Input('max-posts-count') maxNumPosts: number;
    public posts: Array<NewsPost>;
    public loading: boolean;
    public error: boolean;

    constructor(private ns: NewsService){
    	this.posts = [];
    	this.error = false;
    }
    
    ngOnInit() {
    	if(!this.maxNumPosts) { return; }
    	this.error = false;
    	this.loading = true;
        let date = new Date();
        let year = date.getFullYear();
        let month = (date.getMonth() + 1);
        let day = date.getDate();
    	while(this.posts.length < this.maxNumPosts) {
    		this.ns.GetPosts(`news/${year}/${month}/${day}`).subscribe((posts: Array<NewsPost>) => {
                for(var i = 0; i < posts.length && posts.length < this.maxNumPosts; i++) {
                    if(posts[i] && posts[i].type != "file") {
                        continue;
                    }
                    this.ns.GetPost(posts[i].path).subscribe((post: NewsPost) => {
                        post = this.ns.ParseHeader(post);
                        this.posts.push(post);
                        if(this.posts.length >= this.maxNumPosts) {
                            this.loading = false;
                            return;
                        }
                    });
                }
            }, err => {
            	if(err.status != 404) {
	            	this.loading = false;
	            	this.error = true;
	            	console.log("AN ERROR OCCURRED:")
	            	console.log(err);
	            	this.maxNumPosts = -1; // stop getting posts
	            }
            });
            day--;
            if(day == 0) {
            	month--;
            	if(month == 0) {
            		year--;
            		if(+year < 2021) {
            			this.loading = false;
            			return;
            		}
            		month = 12;
            	}
            	day = 31;
            }
            if(day == 30 && month == 5 && year == 2021) {
            	this.loading = false;
            	return;
            }
    	}
    }
}
