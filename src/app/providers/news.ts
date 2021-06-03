import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const ENDPOINT_NEWS_POSTS = `https://api.github.com/repos/munsy/munsy.github.io/contents`; 

export class NewsPost {
	public name: string; 
	public path: string; 
    public sha: string; 
    public size: number;
    public url: string; 
    public html_url: string; 
    public git_url: string; 
    public download_url: string; 
    public type: string; 
    public content: string; 
    public encoding: string; 
}

@Injectable()
export class NewsService {
	public posts: Array<NewsPost>;

	constructor(private http: HttpClient) { 
		this.posts = [];
	}

	public GetYears() {
		console.log(`${ENDPOINT_NEWS_POSTS}/news?ref=master`);
		return this.http.get(`${ENDPOINT_NEWS_POSTS}/news?ref=master`);
	}
	
    public GetMonths(year: string) {
    	console.log(`${ENDPOINT_NEWS_POSTS}/${year}?ref=master`);
    	return this.http.get(`${ENDPOINT_NEWS_POSTS}/${year}?ref=master`);
    }

    public GetDays(month: string) {
    	console.log(`${ENDPOINT_NEWS_POSTS}/${month}?ref=master`);
    	return this.http.get(`${ENDPOINT_NEWS_POSTS}/${month}?ref=master`);
    }

    public GetPosts(day: string) {
    	console.log(`${ENDPOINT_NEWS_POSTS}/${day}?ref=master`);
    	return this.http.get(`${ENDPOINT_NEWS_POSTS}/${day}?ref=master`);
    }

    public GetPost(postid: string) {
    	console.log(`${ENDPOINT_NEWS_POSTS}/${postid}?ref=master`);
    	return this.http.get(`${ENDPOINT_NEWS_POSTS}/${postid}?ref=master`);
    }
}
