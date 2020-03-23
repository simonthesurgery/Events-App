import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-status',
	templateUrl: './status.component.html',
	styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {

	_Open: boolean = false;

	constructor() { }

	ngOnInit() { }

	Open() {
		this._Open = true;
	}

	Close() {
		this._Open = false;
	}

}
