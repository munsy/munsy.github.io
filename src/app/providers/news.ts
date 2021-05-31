import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const ENDPOINT_NEWS_POST = `https://api.github.com/repos/munsy/munsy.github.io/contents/news`; 
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

	constructor(private http: HttpClient) { }
	
    public GetPosts() {
    	return this.http.get(`${ENDPOINT_NEWS_POSTS}`);
    }

    public GetPost(postid: number, date: Date) {
    	let month = date.getUTCMonth() + 1;
    	let day = date.getUTCDate();
    	let year = date.getUTCFullYear();
    	return this.http.get(`${ENDPOINT_NEWS_POST}/${year}/${month}/${day}/${postid}`);
    }
}
