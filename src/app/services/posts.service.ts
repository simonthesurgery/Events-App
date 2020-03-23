import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class PostsService {

	Posts;

	constructor(
		private _HttpClient: HttpClient
	) {
		_HttpClient.get("./../assets/data/posts.json").subscribe(data => {
			this.Posts = data;
		});
	}
}
