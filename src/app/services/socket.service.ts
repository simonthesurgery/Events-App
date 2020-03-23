import { Injectable } from '@angular/core';

import * as socketIo from 'socket.io-client'
import { Observable } from 'rxjs';

import { Event } from 'src/app/models/event'
import { Action } from 'src/app/models/actions'

const SERVER_URL = "http://192.168.66.89:3000";

@Injectable({
	providedIn: 'root'
})
export class SocketService {
	Socket;

	constructor() { }

	InitSocket() {
		this.Socket = socketIo(SERVER_URL);
	}

	Send(action: Action, payload: any) {
		this.Socket.emit(action, payload);
	}

	public onEvent(event: Event): Observable<any> {
		return new Observable<Event>(observer => {
			this.Socket.on(event, (data: any) => observer.next(data));
		});
	}
}
