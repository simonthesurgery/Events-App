import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class CommentsService {

	Comments;

	constructor(
		private _HttpClient: HttpClient
	) {
		_HttpClient.get("./../assets/data/comments.json").subscribe(data => {
			this.Comments = data;
		})
	}

	public getComment(UID): Promise<any> {
		return new Promise((resolve) => {
			this.Comments.forEach(Comment => {
				if(Comment.uid == UID) resolve(Comment);
			});
		})
		
	}
}
