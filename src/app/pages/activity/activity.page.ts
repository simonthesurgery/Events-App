import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

import { Action } from 'src/app/models/actions';
import { Event } from 'src/app/models/event';

@Component({
	selector: 'app-activity',
	templateUrl: './activity.page.html',
	styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {

	Connected: boolean = false;
	Action: string = "";
	Submitted: boolean = false;
	Error: boolean = false;

	constructor(
	) { }

	ngOnInit() {
	}

	DebugConnect() {
		this.Connected = !this.Connected;
		this.Action = "";
		this.Submitted = false;
	}

	DebugSubmit(Input?) {
		this.Submitted = !this.Submitted;
	}

	DebugChangeMode(Mode: string)
	{
		this.Submitted = false;
		this.Action = Mode;
	}

}
