import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
	selector: 'app-comment',
	templateUrl: './comment.component.html',
	styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {

	@Input() CommentUID

	CommentData: any;

	constructor(
		public _CommentsService: CommentsService,
		public _UsersService: UsersService
	) {
		this._CommentsService.getComment(this.CommentUID).then(Data => {
			this.CommentData = Data;
		});
	}

	ngOnInit() {
		
	}

}
