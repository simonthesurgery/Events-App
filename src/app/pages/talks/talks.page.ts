import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
	selector: 'app-talks',
	templateUrl: './talks.page.html',
	styleUrls: ['./talks.page.scss'],
})
export class TalksPage implements OnInit {

	Hours = Array;

	Talks = [{
		"day": 1,
		"room": 1,
		"starttime": "09:00",
		"endtime": "10:00",
		"backgroundcolor": "#FF0000",
		"title": "Intro"
	}, {
		"day": 1,
		"room": 1,
		"starttime": "10:00",
		"endtime": "12:30",
		"backgroundcolor": "#0000FF",
		"title": "New Horizons"
	}, {
		"day": 1,
		"room": 1,
		"starttime": "13:00",
		"endtime": "17:00",
		"backgroundcolor": "#00AA00",
		"title": "Demonstration"
	}, {
		"day": 1,
		"room": 2,
		"starttime": "10:00",
		"endtime": "17:00",
		"backgroundcolor": "#00AAFF",
		"title": "Technical Talk"
	}, {
		"day": 1,
		"room": 3,
		"starttime": "10:00",
		"endtime": "11:00",
		"backgroundcolor": "#FF00FF",
		"title": "Q&A"
	}, {
		"day": 1,
		"room": 3,
		"starttime": "11:00",
		"endtime": "12:30",
		"backgroundcolor": "#FFAA00",
		"title": "Future Developments"
	}]

	RoomCount = 4

	constructor(
		private _Router: Router
	) { }

	ngOnInit() {
	}

	CalculateTalkDiv(Talk) {
		let Width;
		let MarginLeft;
		let Top;
		let Background = Talk.backgroundcolor ? Talk.backgroundcolor : "#777777";
		let DayHeight = 50 + (25 * (this.RoomCount + 1)) + 1;

		let StartTime = Talk.starttime.split(":");
		let EndTime = Talk.endtime.split(":");

		let START = new Date(2020, 0, 1, 9, 0).getTime() / (1000 * 60);
		let STMS = new Date(2020, 0, 1, parseInt(StartTime[0]), parseInt(StartTime[1])).getTime() / (1000 * 60);
		let ETMS = new Date(2020, 0, 1, parseInt(EndTime[0]), parseInt(EndTime[1])).getTime() / (1000 * 60);

		let Leading = STMS - START;
		let Duration = ETMS - STMS;

		MarginLeft = "calc(10% + (0.167% * " + Leading + "))";
		Width = "calc(0.167% * " + Duration + ")";
		Top = 50 + (25 * Talk.room) + (DayHeight * (Talk.day - 1)) + "px";
		return {
			"min-width": Width,
			"max-width": Width,
			"margin-left": MarginLeft,
			"top": Top,
			"background-color": Background + "AA",
			"border": "1px solid " + Background
		}
	}

	OpenTalk(Talk) {
		let Extras: NavigationExtras = {
			state: {
				TalkData: Talk
			}
		}

		this._Router.navigate(['/talk'], Extras);
	}

}
