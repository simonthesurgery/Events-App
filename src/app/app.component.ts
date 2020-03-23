import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
import { IdentityService } from './services/identity.service';
import { UsersService } from './services/users.service';
import { CommentsService } from './services/comments.service';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent {

	Pages: any;

	constructor(
		private _Platform: Platform,
		private _SplashScreen: SplashScreen,
		private _StatusBar: StatusBar,

		private _HttpClient: HttpClient,
		private _Router: Router,
		private _UsersService: UsersService,
		private _IdentityService: IdentityService,
		private _CommentsService: CommentsService
	) {
		this.initializeApp();

		_HttpClient.get("./assets/data/menu-items.json").subscribe(Data => {
			this.Pages = Data;
		})
	}

	initializeApp() {
		this._Platform.ready().then(() => {
			this._StatusBar.styleDefault();
			this._SplashScreen.hide();
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
