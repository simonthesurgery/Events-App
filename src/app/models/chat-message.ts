import { User } from 'src/app/models/user'

export class ChatMessage {
	constructor(
		public Sender: User, 
		public Content: string,
		public Timestamp: string) {
	}
}