import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {

	constructor(
		public _EventService: EventService,
		public _DatePipe: DatePipe
	) { }

}
