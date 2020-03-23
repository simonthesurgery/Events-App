import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IdentityService } from './identity.service';

@Injectable({
	providedIn: 'root'
})
export class UsersService {

	Users;

	constructor(
		private _HttpClient: HttpClient,
		private _IdentityService: IdentityService
	) {
		_HttpClient.get("./../assets/data/users.json").subscribe(data => {
			this.Users = data;
			_IdentityService.User = this.Users[0];
		})
	}

	GetUserData(UID, type) {
		let Result;
		let User;

		this.Users.forEach(_User => {
			if(_User.uid == UID) User = _User;
		});

		switch (type) {
			case 'picture':
				Result = User.picture.profile;
				break;
			case 'name':
				Result = User.firstname + " " + User.lastname;
				break;
		}

		return Result;
	}
}
