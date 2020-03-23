import { User } from 'src/app/models/user'

export class ChatMessage {
	constructor(
		private Sender: User, 
		private Content: string,
		private Timestamp: string) {
	}
}