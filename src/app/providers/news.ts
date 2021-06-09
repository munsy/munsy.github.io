import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';

const showdown = require('showdown');

const ENDPOINT_NEWS_CONTENTS = `https://api.github.com/repos/munsy/munsy.github.io/contents`;

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
    const ENDPOINT_GET_YEARS = `${ENDPOINT_NEWS_CONTENTS}/news?ref=master`;
    if(!environment.production){
      console.log(ENDPOINT_GET_YEARS)
    }
		return this.http.get(ENDPOINT_GET_YEARS);
	}
	
  public GetMonths(year: string) {
    const ENDPOINT_GET_MONTHS = `${ENDPOINT_NEWS_CONTENTS}/${year}?ref=master`;
    if(!environment.production){
      console.log(ENDPOINT_GET_MONTHS)
    }
    return this.http.get(ENDPOINT_GET_MONTHS);
  }

  public GetDays(month: string) {
    const ENDPOINT_GET_DAYS = `${ENDPOINT_NEWS_CONTENTS}/${month}?ref=master`;
    if(!environment.production){
      console.log(ENDPOINT_GET_DAYS)
    }
    return this.http.get(ENDPOINT_GET_DAYS);
  }

  public GetPosts(day: string) {
    const ENDPOINT_GET_POSTS = `${ENDPOINT_NEWS_CONTENTS}/${day}?ref=master`;
    if(!environment.production){
      console.log(ENDPOINT_GET_POSTS)
    }
    return this.http.get(ENDPOINT_GET_POSTS);
  }

  public GetPost(postid: string) {
    const ENDPOINT_GET_POST = `${ENDPOINT_NEWS_CONTENTS}/${postid}?ref=master`;
    if(!environment.production){
      console.log(ENDPOINT_GET_POST)
    }
    return this.http.get(ENDPOINT_GET_POST);
  }

  public ParseHeader(post: NewsPost): NewsPost {
    if(post == null) {
      return null;
    }
    const classMap = {
      pre: 'bg-dark text-white p-1',
      code: 'bg-dark'
    }

    const bindings = Object.keys(classMap)
      .map(key => ({
        type: 'output',
        regex: new RegExp(`<${key}(.*)>`, 'g'),
        replace: `<${key} class="${classMap[key]}" $1>`
      }));

    const converter = new showdown.Converter({
      extensions: [...bindings]
    });

    //const converter = new showdown.Converter();
    post.markdown = Buffer.from(post.content, 'base64').toString('binary');
    let postHeader = post.markdown.split("---\n");

    if(postHeader.length < 2) {
      return null;
    }
    let postHeaderTokens = postHeader[1].split("\n");
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
          break;
        }
        default: {
          console.log("unknown token key: " + postHeaderToken[0]);
          break;
        }
      }
    }
    post.markdown = postHeader[2];
    post.html = converter.makeHtml(post.markdown);
    return post;
  }
}
