import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-event-listing',
	templateUrl: './event-listing.component.html',
	styleUrls: ['./event-listing.component.scss'],
})
export class EventListingComponent implements OnInit {

	constructor(
		public _Router: Router
	) { }

	ngOnInit() { }

	OpenLandingPage() {
		this._Router.navigate(['/landing'])
	}
}
