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
        <h6 class="text-uppercase">loading...</h6>
    </div>
    <div class="d-inline" *ngIf="!loading">
	  	<h2 class="text-center text-uppercase">recent news</h2>
	  	<div class="d-flex justify-content-center">
	  		<div *ngIf="error">An error occurred.</div>
	  		<div class="card w-50 m-3 border border-dark rounded bg-black" *ngFor="let post of posts.reverse(); index as i">
	  			<div class="bg-dark">
	  				<img [attr.src]="post.teaser_image" class="card-img-top" alt="...">
  				</div>
  				<div class="card-body pt-3">
  					<h5 class="card-title text-uppercase">
  						{{ post.title }}
  					</h5>
  					<p class="article-summary">
  						{{ post.description }}
  					</p>
  					<a [routerLink]="['/', 'news', post.year, post.month, post.day, post.postid]" class="btn btn-dark text-uppercase rounded-0">
  						read more
  					</a>
  					<span class="float-right pt-2">
  						{{ post.date }}
  					</span>
  				</div>
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
    
    async ngOnInit() {
    	if(!this.maxNumPosts) { return; }
    	this.error = false;
    	this.loading = true;
        let date = new Date();
        let year = date.getFullYear();
        let month = (date.getMonth() + 1);
        let day = date.getDate();
    	while(this.posts.length < this.maxNumPosts) {
    		if(month < 5 && year == 2021) {
    			this.loading = false;
    			return;
    		}
    		console.log('get days for ' + month);
    		await this.ns.GetDays(`news/${year}/${month}`).subscribe(async (days: Array<NewsPost>) => {
    			days = days.reverse();
    			console.log(days);
    			for(let i = 0; i < days.length && this.posts.length < this.maxNumPosts; i++) { 
    				this.ns.GetPosts(`${days[i].path}`).subscribe((posts: Array<NewsPost>) => {
    					posts = posts.reverse();
            		    for(let j = 0; j < posts.length && this.posts.length < this.maxNumPosts; j++) {
            		        if(posts[j] && posts[j].type != "file") {
            		            continue;
            		        }
            		        this.ns.GetPost(posts[j].path).subscribe((post: NewsPost) => {
            		            post = this.ns.ParseHeader(post);
            		            console.log(post);
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
    		month--;
            if(month == 0) {
            	year--;
            	month = 12;
            }
    	}
    }
}
