import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { StatusBar, Style } from '@capacitor/status-bar';

import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
import { IdentityService } from './services/identity.service';
import { UsersService } from './services/users.service';
import { CommentsService } from './services/comments.service';
import { EventService } from './services/event.service';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent {

	Pages: any;

	constructor(
		public _Platform: Platform,

		public _HttpClient: HttpClient,
		public _Router: Router,
		public _UsersService: UsersService,
		public _IdentityService: IdentityService,
		public _CommentsService: CommentsService,
		public _EventService: EventService
	) {
		this.initializeApp();

		_HttpClient.get("./assets/data/menu-items.json").subscribe(Data => {
			this.Pages = Data;
		})
	}

	initializeApp() {
		this._Platform.ready().then(() => {
			StatusBar.setStyle({ style: Style.Default });
		});
	}

	Route(Page)
	{
		if(Page.title == "Your Profile")
		{
			let Extras: NavigationExtras = {
				state: {
					UserData: this._IdentityService.User,
					IsCurrentUser: true
				}
			}
	
			this._Router.navigate([Page.route], Extras);
		}
		else
		{
			this._Router.navigate([Page.route]);
		}
	}
}
