import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';

const ENDPOINT_WORLDMAP_DATA = `https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson`;

const url = environment.apiUrl;
const API_VERSION = "v1";
const ENDPOINT_CHECKOUT = `${url}${API_VERSION}/checkout`;
const ENDPOINT_SPECIAL_OFFERS = `${url}${API_VERSION}/promotions`;
const ENDPOINT_MAILING_LIST_SUBSCRIBE = `${url}${API_VERSION}/mailing/subscribe`;


@Injectable()
export class EmailService {
	private http: HttpClient;
	
    public SubToMailingList(email: string) {
    	return this.http.get(`${ENDPOINT_MAILING_LIST_SUBSCRIBE}?u=${email}`);
    }

    public ConfirmMailingSubscription(id: string) {
    	return this.http.get(`${ENDPOINT_MAILING_LIST_SUBSCRIBE}?a=${id}`);
    }

	constructor(http?: HttpClient) {
		if(!environment.production) {
			console.log(environment.apiUrl);
		}
	}
}
