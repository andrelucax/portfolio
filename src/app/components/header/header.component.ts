import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss'
})
export class HeaderComponent {

	@Output()
	onToogleTheme: EventEmitter<void> = new EventEmitter<void>();

	@Input()
	isDark: boolean = true;

	@Input("animateLogo")
	animateLogo: boolean;

	toogleTheme() {
		this.onToogleTheme.emit();
	}
}
