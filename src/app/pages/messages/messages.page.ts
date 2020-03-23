import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChatModal } from 'src/app/modals/chat/chat.page';
@Component({
	selector: 'app-messages',
	templateUrl: './messages.page.html',
	styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

	constructor(
		private _ModalCtrl: ModalController
	) { }

	ngOnInit() {
	}

	async OpenChat() {
		let Modal = await this._ModalCtrl.create({
			component: ChatModal
		})
		return await Modal.present();
	}
}
