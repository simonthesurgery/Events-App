import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-up-next',
	templateUrl: './up-next.component.html',
	styleUrls: ['./up-next.component.scss'],
})
export class UpNextComponent implements OnInit {

	@Input() Title;
	@Input() Date;

	constructor() { }

	ngOnInit() { }

}
