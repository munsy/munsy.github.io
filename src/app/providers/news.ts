import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';

const showdown = require('showdown');

const ENDPOINT_NEWS_POSTS = `https://api.github.com/repos/munsy/munsy.github.io/contents`; 

export class NewsPost {
    public postid: string;
    public toc: string;
    public title: string;
    public teaser_image: string;
    public description: string;
    public date: string;
    public month: string;
    public day: string;
    public year: string;

    public html: string;
    public markdown: string;

    // github stuff
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

    constructor(){}
}

@Injectable()
export class NewsService {
	public articles: Array<NewsPost>;

	constructor(private http: HttpClient) { 
		this.articles = [];
	}

	public GetYears() {
        if(!environment.production){
            console.log(`${ENDPOINT_NEWS_POSTS}/news?ref=master`);
        }
		return this.http.get(`${ENDPOINT_NEWS_POSTS}/news?ref=master`);
	}
	
    public GetMonths(year: string) {
        if(!environment.production){
            console.log(`${ENDPOINT_NEWS_POSTS}/${year}?ref=master`);
        }
    	return this.http.get(`${ENDPOINT_NEWS_POSTS}/${year}?ref=master`);
    }

    public GetDays(month: string) {
        if(!environment.production){
            console.log(`${ENDPOINT_NEWS_POSTS}/${month}?ref=master`);
        }
    	return this.http.get(`${ENDPOINT_NEWS_POSTS}/${month}?ref=master`);
    }

    public GetPosts(day: string) {
        if(!environment.production){
            console.log(`${ENDPOINT_NEWS_POSTS}/${day}?ref=master`);
        }
    	return this.http.get(`${ENDPOINT_NEWS_POSTS}/${day}?ref=master`);
    }

    public GetPost(postid: string) {
        if(!environment.production){
            console.log(`${ENDPOINT_NEWS_POSTS}/${postid}?ref=master`);
        }
    	return this.http.get(`${ENDPOINT_NEWS_POSTS}/${postid}?ref=master`);
    }

    public ParseHeader(post: NewsPost): NewsPost {
        if(post == null) {
            console.log("null post...");
            return null;
        }
        const converter = new showdown.Converter();
        post.markdown = Buffer.from(post.content, 'base64').toString('binary');
        let postHeader = post.markdown.split("---\n");

        if(postHeader.length < 2) {
          console.log("bad header parse: " + post.markdown);
          return null;
        }
        let postHeaderTokens = postHeader[1].split("\n");
        if(postHeaderTokens.length < 6) {
          console.log(`couldn't parse newlines from post header: ${postHeader[0]}`);
          console.log(`length ${postHeaderTokens.length}`);
        }
        for(var a = 0; a < postHeaderTokens.length; a++) {
          let postHeaderToken = postHeaderTokens[a].split(": ", 2);
          switch(postHeaderToken[0]) {
            case "postid": {
              post.postid = postHeaderToken[1];
              break;
            }
            case "toc": {
              post.toc = postHeaderToken[1];
              break;
            }
            case "title": {
              post.title = postHeaderToken[1];
              break;
            }
            case "teaser-image": {
              post.teaser_image = postHeaderToken[1];
              break;
            }
            case "description": {
              post.description = postHeaderToken[1];
              break;
            }
            case "date": {
              let date = new Date(postHeaderToken[1]);
              post.date = postHeaderToken[1];
              post.year = date.getFullYear().toString();
              post.month = (date.getMonth() + 1).toString();
              post.day = date.getDate().toString();
              break;
            }
            case "": {
              continue;
            }
            default: {
              console.log("unknown token key: " + postHeaderToken[0]);
              break;
            }
          }
        }
        post.markdown = postHeader[1];
        post.html = converter.makeHtml(post.markdown);
        return post;
    }
}
