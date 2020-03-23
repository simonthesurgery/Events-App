import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-calendar-page',
	templateUrl: './calendar.page.html',
	styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

	CalendarView;

	constructor() { }

	ngOnInit() {
	}

	ChangeView() {
		this.CalendarView = !this.CalendarView;
	}

}
