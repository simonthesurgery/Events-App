import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-splash',
	templateUrl: './splash.page.html',
	styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

	constructor(
		public _Router: Router
	) { }

	ngOnInit() {
		setTimeout(() => {
			this._Router.navigate(['/landing']);
		}, 2000);
	}

}
