import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DatePipe } from '@angular/common';
import { UsersService } from 'src/app/services/users.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.page.html',
	styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

	@Input() EventInfo;

	constructor() { }

	ngOnInit() {
	}
}
