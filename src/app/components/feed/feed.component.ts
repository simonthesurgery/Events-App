import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { PostsService } from 'src/app/services/posts.service';
import { ModalController } from '@ionic/angular';
import { CommentsModal } from 'src/app/modals/comments/comments.page';

@Component({
	selector: 'app-feed',
	templateUrl: './feed.component.html',
	styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {

	constructor(
		public _UsersService: UsersService,
		public _PostsService: PostsService,
		public _ModalCtrl: ModalController
	) { }

	ngOnInit() {}

	async OpenCommentsModal(Postdata) {
		const Modal = await this._ModalCtrl.create(
			{
				component: CommentsModal,
				componentProps: {
					"Post": Postdata
				}
			}
		)

		return Modal.present();
	}

}
