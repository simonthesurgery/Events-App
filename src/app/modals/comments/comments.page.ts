import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
	selector: 'app-comments',
	templateUrl: './comments.page.html',
	styleUrls: ['./comments.page.scss'],
})
export class CommentsModal implements OnInit {

	@Input() Post;

	constructor(
		private _UsersService: UsersService
	) { }

	ngOnInit() {
	}

	SendComment(CommentContent) {

	}

}
