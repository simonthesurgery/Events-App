import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IdentityService } from 'src/app/services/identity.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.page.html',
	styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

	IsCurrentUser: boolean;
	ProfileData;

	constructor(
		private _Router: Router,
		private _Route: ActivatedRoute,
		private _UsersService: UsersService,
		private _IdentityService: IdentityService
	) {
		_Route.queryParams.subscribe(params => {
			if (_Router.getCurrentNavigation().extras.state.UserData) {
				this.ProfileData = _Router.getCurrentNavigation().extras.state.UserData;
				this.IsCurrentUser = _Router.getCurrentNavigation().extras.state.IsCurrentUser;
			}
			else {
				this.ProfileData = this._IdentityService.User;
				console.log(this.ProfileData);
				this.IsCurrentUser = true;
			}
		})
	}

	ngOnInit() {
	}
}