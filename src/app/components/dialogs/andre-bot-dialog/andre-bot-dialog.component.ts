import { Component } from '@angular/core';

@Component({
  selector: 'app-andre-bot-dialog',
  templateUrl: './andre-bot-dialog.component.html',
  styleUrl: './andre-bot-dialog.component.scss'
})
export class AndreBotDialogComponent {

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
}

export interface Message {
	message: string;
	answer: boolean;
}
