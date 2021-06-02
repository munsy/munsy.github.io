import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const ENDPOINT_NEWS_POSTS = `https://api.github.com/repos/munsy/munsy.github.io/contents/news`; 

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
		return this.http.get(`${ENDPOINT_NEWS_POSTS}?ref=master`);
	}
	
    public GetMonths(year: string) {
    	return this.http.get(`${ENDPOINT_NEWS_POSTS}/${year}?ref=master`);
    }

    public GetDays(year, month: string) {
    	return this.http.get(`${ENDPOINT_NEWS_POSTS}/${year}/${month}?ref=master`);
    }

    public GetPosts(year, month, day: string) {
    	return this.http.get(`${ENDPOINT_NEWS_POSTS}/${year}/${month}/${day}?ref=master`);
    }

    public GetPost(year, month, day, postid: string) {
    	return this.http.get(`${ENDPOINT_NEWS_POSTS}/${year}/${month}/${day}/${postid}.md?ref=master`);
    }
}
