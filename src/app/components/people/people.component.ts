import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
	selector: 'app-people',
	templateUrl: './people.component.html',
	styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {

	constructor(
		public _UsersService: UsersService,
		public _Router: Router
	) { }

	ngOnInit() { }

	OpenProfile(User) {
		let Extras: NavigationExtras = {
			state: {
				UserData: User,
				IsCurrentUser: false
			}
		}

		this._Router.navigate(['/profile'], Extras);
	}
}
