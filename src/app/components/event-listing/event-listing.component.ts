import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
	selector: 'app-event-listing',
	templateUrl: './event-listing.component.html',
	styleUrls: ['./event-listing.component.scss'],
})
export class EventListingComponent implements OnInit {

	constructor(
		public _Router: Router,
		public _EventService: EventService,
		public _DatePipe: DatePipe
	) { }

	ngOnInit() { }

	OpenLandingPage() {
		this._Router.navigate(['/landing'])
	}
}
