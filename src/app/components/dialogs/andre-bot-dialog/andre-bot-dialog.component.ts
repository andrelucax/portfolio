import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-andre-bot-dialog',
  templateUrl: './andre-bot-dialog.component.html',
  styleUrl: './andre-bot-dialog.component.scss'
})
export class AndreBotDialogComponent implements OnInit {

	@ViewChild("content")
	content: ElementRef;

	readonly QuestionOptionTypes = QuestionOptionTypes;
	readonly OptionsTypes = OptionsTypes;

	isAnswering: boolean = false;

	optionType: OptionsTypes = OptionsTypes.Default;

	messages: Message[] = [];

	ngOnInit(): void {
		this.messages.push(
			{
				translationKey: "components.dialogs.andre-bot-dialog.hello",
				answer: true,
			},
			{
				translationKey: "components.dialogs.andre-bot-dialog.im-andre-bot",
				answer: true,
			},
			{
				translationKey: "components.dialogs.andre-bot-dialog.how-can-i-help",
				answer: true,
			},
		);
	}

	readonly questionOptionClasses: string = "p-3 border-primary bg-primary-contrast message question-option text-primary w-100 d-flex justify-content-center";

	sendAnswer(answers: Message[], optionType: OptionsTypes = OptionsTypes.Default) {
		this.isAnswering = true;
		for (let i = 0; i < answers.length; ++i) {
			setTimeout(() => {
				this.messages.push(answers[i]);
				setTimeout(() => {
					this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
				});
			}, 1000 * (i + 1));
		}

		setTimeout(() => {
			this.isAnswering = false;
			this.optionType = optionType;
			setTimeout(() => {
				this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
			});
		}, 1000 * answers.length);
	}

	hello() {
		this.messages.push(
			{
				translationKey: "components.dialogs.andre-bot-dialog.just-saying-hello",
				answer: false
			}
		);

		let answers: Message[] = [
			{
				translationKey: "components.dialogs.andre-bot-dialog.hi",
				answer: true,
			},
			{
				translationKey: "components.dialogs.andre-bot-dialog.thanks-for-passing-by",
				answer: true,
			},
			{
				translationKey: "components.dialogs.andre-bot-dialog.hope-youre-having-fun",
				answer: true,
			},
			{
				translationKey: "components.dialogs.andre-bot-dialog.can-i-do-anything-else-for-you",
				answer: true,
			},
		];

		this.sendAnswer(answers);
	}

	hire() {
		this.messages.push(
			{
				translationKey: "components.dialogs.andre-bot-dialog.wed-like-to-hire-you",
				answer: false
			}
		);

		let answers: Message[] = [
			{
				translationKey: "components.dialogs.andre-bot-dialog.thats-awesome",
				answer: true,
			},
			{
				translationKey: "components.dialogs.andre-bot-dialog.send me a message-and-lets-chat-further",
				answer: true,
			},
			{
				translationKey: "components.dialogs.andre-bot-dialog.you-can-call-me-at",
				answer: true,
				translationArguments: { email: "andrelucax@gmail.com" },
			},
		];

		this.sendAnswer(answers, OptionsTypes.Contact);
	}

	sendMessage() {
		this.isAnswering = true;
		this.messages.push(
			{
				translationKey: "components.dialogs.andre-bot-dialog.send-a-message",
				answer: false
			}
		);

		let answers: Message[] = [
			{
				translationKey: "components.dialogs.andre-bot-dialog.im-sending-you-to-your-email",
				answer: true,
			},
			{
				translationKey: "components.dialogs.andre-bot-dialog.can-i-do-anything-else-for-you",
				answer: true,
			},
		];

		this.sendAnswer(answers);
		window.open('mailto:andrelucax@gmail.com?subject=Work%20enquiry');
	}

	showOptions() {
		this.isAnswering = true;
		this.messages.push(
			{
				translationKey: "components.dialogs.andre-bot-dialog.see-other-options",
				answer: false
			}
		);

		let messagesToAdd: Message[] = [
			{
				translationKey: "components.dialogs.andre-bot-dialog.ok-here-you-go",
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
	translationKey: string;
	answer: boolean;
	translationArguments?: any;
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
