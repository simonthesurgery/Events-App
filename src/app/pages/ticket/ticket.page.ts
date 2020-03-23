import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-ticket',
	templateUrl: './ticket.page.html',
	styleUrls: ['./ticket.page.scss'],
})
export class TicketPage implements OnInit {

	@Input() Event;
	TicketData = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

	constructor() { }

	ngOnInit() {
	}

}
