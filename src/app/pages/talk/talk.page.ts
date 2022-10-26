import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-talk',
	templateUrl: './talk.page.html',
	styleUrls: ['./talk.page.scss'],
})
export class TalkPage implements OnInit {

	TalkData;

	constructor(
		public _Router: Router,
		public _Route: ActivatedRoute
	) {
		_Route.queryParams.subscribe(params => {
			this.TalkData = _Router.getCurrentNavigation().extras.state.TalkData
		})
	}

	ngOnInit() {
	}

}
