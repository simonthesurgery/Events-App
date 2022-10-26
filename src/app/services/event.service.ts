import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class EventService {

	Events;

	constructor(
		public _HttpClient: HttpClient
	) {
		_HttpClient.get("./../assets/data/events.json").subscribe(data => {
			this.Events = data;

			this.Events = this.Events.sort((a, b) => {
				if(a.date > b.date) return 1;
				else return -1;
			})
		});
	}

	getEvents() {
		return this.Events;
	}

	getNext() {
		return this.Events[0];
	}
}
