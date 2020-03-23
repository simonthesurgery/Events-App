import { Component, OnInit, Input, NgZone } from '@angular/core';

@Component({
	selector: 'app-countdown',
	templateUrl: './countdown.component.html',
	styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit {

	@Input() EventDate;
	CountdownEnabled = false;

	Countdown: any = {
		Days: 0,
		Hours: 0,
		Minutes: 0,
		Seconds: 0
	};

	constructor() { 
	}

	ngOnInit() { 
		this.EventDate = new Date(2020, 2, 20, 0, 0);
		if (this.EventDate > Date.now()) this.CountdownEnabled = true;

		if (this.CountdownEnabled) {
			setInterval(() => {
				let T = Math.abs(Date.now() - this.EventDate);

				let D = Math.floor(this.toDays(T));
				let H = Math.floor(this.toHours(T) - (D * 24));
				let M = Math.floor(this.toMinutes(T) - (H * 60) - (D * 60 * 24));
				let S = Math.floor(this.toSeconds(T) - (M * 60) - (H * 60 * 60) - (D * 60 * 60 * 24));

				this.Countdown = {
					Days: D,
					Hours: H,
					Minutes: M,
					Seconds: S
				}
			}, 1000);
		}
	}

	toDays(milliseconds: number): number {
		return milliseconds / (24 * 60 * 60 * 1000);
	}

	toHours(milliseconds: number): number {
		return milliseconds / (60 * 60 * 1000);
	}

	toMinutes(milliseconds: number): number {
		return milliseconds / (60 * 1000);
	}

	toSeconds(milliseconds: number): number {
		return milliseconds / 1000;
	}

}
