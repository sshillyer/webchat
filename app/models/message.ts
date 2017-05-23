// Based on https://www.codeproject.com/Articles/871622/Writing-a-Chat-Server-using-Node-js-TypeScript-and

interface Message {
    username: string;
    message: string;
}

export class UserMessage implements Message {
	private data: { username: string; message: string };

	constructor(payload: string) {
		var data = JSON.parse(payload);

		if (!data.username || !data.message) {
			throw new Error('Invalid message payload received: ' + payload);
		}

		this.data = data;
	}

	get username(): string {
		return this.data.username;
	}

	get message(): string {
		return this.data.message;
	}

    toString(): string {
        return this.data.username + ' said: ' + this.data.message;
    }
}
