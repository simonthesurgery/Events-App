import { Component, OnInit, ViewChild } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
import { Event } from 'src/app/models/event';
import { Action } from 'src/app/models/actions'
import { ModalController } from '@ionic/angular';
import { ChatMessage } from 'src/app/models/chat-message';
import { User } from 'src/app/models/user';
import { Plugins, KeyboardInfo } from '@capacitor/core';
import { DatePipe } from '@angular/common';

const { Keyboard } = Plugins;

@Component({
	selector: 'app-chat',
	templateUrl: './chat.page.html',
	styleUrls: ['./chat.page.scss'],
})
export class ChatModal implements OnInit {

	@ViewChild('Content', { static: true }) private Content: any;

	Messages: any[] = [];
	MessageContent: string;

	constructor(
		private _SocketService: SocketService,
		private _DatePipe: DatePipe,
		private _ModalCtrl: ModalController
	) { }

	ngOnInit() {
		this._SocketService.InitSocket();

		Keyboard.addListener("keyboardDidShow", (info: KeyboardInfo) => {
			this.Content.scrollToBottom(100);
		})

		if (localStorage.getItem("messages"))
			this.Messages = JSON.parse(localStorage.getItem("messages"));

		this._SocketService.onEvent(Event.MESSAGE).subscribe((message) => {
			this.Messages.push(JSON.parse(message));
			localStorage.setItem("messages", JSON.stringify(this.Messages));
			this.Content.scrollToBottom(100);
		})		
	}

	ionViewWillEnter()
	{
		this.Content.scrollToBottom(100);
	}

	SendMessage(Content: string) {
		if (!Content || Content == "") return;

		let Sender = new User("Simon Newman");
		let Message = new ChatMessage(Sender, Content, this._DatePipe.transform(Date.now(), 'short'));

		this._SocketService.Send(Action.MESSAGE, JSON.stringify(Message));
		this.MessageContent = null;
	}

	Clear() {
		localStorage.removeItem("messages");
		this.Messages = new Array<any>();
	}

	DismissModal() {
		this._ModalCtrl.dismiss()
	}

}
