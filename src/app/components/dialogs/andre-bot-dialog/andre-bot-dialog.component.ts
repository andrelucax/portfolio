import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-andre-bot-dialog',
  templateUrl: './andre-bot-dialog.component.html',
  styleUrl: './andre-bot-dialog.component.scss'
})
export class AndreBotDialogComponent {

	@ViewChild("content")
	content: ElementRef;

	readonly QuestionOptionTypes = QuestionOptionTypes;
	readonly OptionsTypes = OptionsTypes;

	isAnswering: boolean = false;

	optionType: OptionsTypes = OptionsTypes.Default;

	messages: Message[] = [
		{
			message: "Hello!",
			answer: true,
		},
		{
			message: "I'm André Bot. I'm here to help you.",
			answer: true,
		},
		{
			message: "How can I help?",
			answer: true,
		},
	];

	// TODO code reuse
	hello() {
		this.isAnswering = true;
		this.messages.push(
			{
				message: 'Just saying hello!',
				answer: false
			}
		);

		let messagesToAdd: Message[] = [
			{
				message: "Hi!",
				answer: true,
			},
			{
				message: "Thanks for passing by",
				answer: true,
			},
			{
				message: "Hope you're having fun 😉",
				answer: true,
			},
			{
				message: "Can I do anything else for you?",
				answer: true,
			},
		];

		for (let i = 0; i < messagesToAdd.length; ++i) {
			setTimeout(() => {
				this.messages.push(messagesToAdd[i]);
				setTimeout(() => {
					this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
				});
			}, 1000 * (i + 1));
		}

		setTimeout(() => {
			this.isAnswering = false;
			setTimeout(() => {
				this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
			});
		}, 1000 * messagesToAdd.length);
	}

	hire() {
		this.isAnswering = true;
		this.messages.push(
			{
				message: "We'd like to hire you",
				answer: false
			}
		);

		let messagesToAdd: Message[] = [
			{
				message: "That's awesome!",
				answer: true,
			},
			{
				message: "Send me a message and let's chat further!",
				answer: true,
			},
			{
				message: "You can call me at andrelucax@gmail.com",
				answer: true,
			},
		];

		for (let i = 0; i < messagesToAdd.length; ++i) {
			setTimeout(() => {
				this.messages.push(messagesToAdd[i]);
				setTimeout(() => {
					this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
				});
			}, 1000 * (i + 1));
		}

		setTimeout(() => {
			this.optionType = OptionsTypes.Contact;
			this.isAnswering = false;
			setTimeout(() => {
				this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
			});
		}, 1000 * messagesToAdd.length);
	}

	message() {
		this.isAnswering = true;
		this.messages.push(
			{
				message: "Send a message",
				answer: false
			}
		);

		let messagesToAdd: Message[] = [
			{
				message: "I'm sending you to your mail",
				answer: true,
			},
			{
				message: "Can I do anything else for you?",
				answer: true,
			},
		];

		window.open('mailto:andrelucax@gmail.com?subject=Work%20enquiry');
		for (let i = 0; i < messagesToAdd.length; ++i) {
			setTimeout(() => {
				this.messages.push(messagesToAdd[i]);
				setTimeout(() => {
					this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
				});
			}, 1000 * (i + 1));
		}

		setTimeout(() => {
			this.optionType = OptionsTypes.Default;
			this.isAnswering = false;
			setTimeout(() => {
				this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
			});
		}, 1000 * messagesToAdd.length);
	}

	options() {
		this.isAnswering = true;
		this.messages.push(
			{
				message: "See other options",
				answer: false
			}
		);

		let messagesToAdd: Message[] = [
			{
				message: "Ok, here you go",
				answer: true,
			},
		];

		for (let i = 0; i < messagesToAdd.length; ++i) {
			setTimeout(() => {
				this.messages.push(messagesToAdd[i]);
				setTimeout(() => {
					this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
				});
			}, 1000 * (i + 1));
		}

		setTimeout(() => {
			this.optionType = OptionsTypes.Default;
			this.isAnswering = false;
			setTimeout(() => {
				this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
			});
		}, 1000 * messagesToAdd.length);
	}
}

export interface Message {
	message: string;
	answer: boolean;
}

export enum QuestionOptionTypes {
	Hello = "Hello",
	Hire = "Hire",
	Message = "Message",
	Options = "Options",
}

export enum OptionsTypes {
	Default = "Default",
	Contact = "Contact",
}
