import { Component, OnInit } from '@angular/core';
import { DatePipe, WeekDay } from '@angular/common';
import { Router } from '@angular/router';

@Component({
	selector: 'app-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

	private Months: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	public SelectedDate: string;
	private Days: number[] = [];

	constructor(
		private _DatePipe: DatePipe,
		private _Router: Router
	) { }

	ngOnInit() {
		this.Reset();
	}

	ChangeMonth(Direction: string) {
		let Y = parseInt(this._DatePipe.transform(this.SelectedDate, "yyyy"));
		let M = parseInt(this._DatePipe.transform(this.SelectedDate, "MM"));
		let D = parseInt(this._DatePipe.transform(this.SelectedDate, "dd"));

		if (Direction == "Prev") {
			if (M == 1) {
				Y--;
				M = 12;
			}
			else {
				M--;
			}
		}

		if (Direction == "Next") {
			if (M == 12) {
				Y++;
				M = 1;
			}
			else {
				M++;
			}
		}

		while (D > this.Months[M-1]) {
			D--;
		}

		let Year = Y.toString();
		let Month = M.toString();
		let Day = D.toString();

		if (M < 10) Month = "0" + Month;
		if (D < 10) Day = "0" + Day;

		this.SelectedDate = Year + "-" + Month + "-" + Day;
		this.CalculateDays();
	}

	Reset() {
		this.SelectedDate = this._DatePipe.transform(Date.now(), "yyyy-MM-dd");
		this.CalculateDays()
	}

	CalculateDays() {
		let StartDay = this.CalculateStartDay();
		let LeadingDays: number;
		let M = parseInt(this._DatePipe.transform(this.SelectedDate, "MM"));
		this.Days = [];
		let TotalDays = this.Months[M - 1];

		if (M == 2 && this.isLeapYear())
			TotalDays++;

		switch (StartDay) {
			case "Sun":
				LeadingDays = 0;
				break;
			case "Mon":
				LeadingDays = 1;
				break;
			case "Tue":
				LeadingDays = 2;
				break;
			case "Wed":
				LeadingDays = 3;
				break;
			case "Thu":
				LeadingDays = 4;
				break;
			case "Fri":
				LeadingDays = 5;
				break;
			case "Sat":
				LeadingDays = 6;
				break;
		}

		for (let i = 0; i < LeadingDays; i++) {
			this.Days.push(null);
		}

		for (let i = 1; i <= TotalDays; i++) {
			this.Days.push(i);
		}

		while (this.Days.length < 42) {
			this.Days.push(null);
		}
	}

	CalculateStartDay() {
		let YM = this._DatePipe.transform(this.SelectedDate, "yyyy-MM");
		YM = YM + "-01";

		return this._DatePipe.transform(YM, "E");
	}

	isLeapYear(): boolean {
		let Y = parseInt(this._DatePipe.transform(this.SelectedDate, "yyyy"))

		if (Y % 4 == 0) {
			if (Y % 100 == 0) {
				if (Y % 400 == 0) {
					return true;
				}
				else {
					return false;
				}
			}
			else {
				return true;
			}
		}
		else {
			return false;
		}

	}

	SelectDay(Day) {
		let YM = this._DatePipe.transform(this.SelectedDate, "yyyy-MM");
		let D = Day.toString();

		if (Day < 10) D = "0" + D;

		this.SelectedDate = YM + "-" + D;
	}

	CalculateClass(Day): string[] {
		let Class: string[] = [];

		if (Day == null) {
			Class.push("blank");
			return Class;
		}

		let Y = parseInt(this._DatePipe.transform(this.SelectedDate, "yyyy"));
		let M = parseInt(this._DatePipe.transform(this.SelectedDate, "MM"));
		let YM = this._DatePipe.transform(this.SelectedDate, "yyyy-MM")
		let D = parseInt(this._DatePipe.transform(this.SelectedDate, "dd"));
		let YMD = YM + "-" + ((Day < 10) ? ("0" + Day.toString()) : Day.toString());

		let T = this._DatePipe.transform(Date.now(), "yyyy-MM-dd");

		if (YMD == T) Class.push("today");
		if (Day == D) Class.push("selected");

		return Class;
	}
}
