import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss'
})
export class HeaderComponent {

	@Output()
	onToogleMenu: EventEmitter<void> = new EventEmitter<void>();

	@Output()
	onToogleTheme: EventEmitter<void> = new EventEmitter<void>();

	@Output()
	onChangeLang: EventEmitter<string> = new EventEmitter<string>();

	@Output()
	onContactMe: EventEmitter<void> = new EventEmitter<void>();

	@Input()
	isDark: boolean = true;

	@Input("animateLogo")
	animateLogo: boolean;

	@Input("isBotDialogOpen")
	isBotDialogOpen: boolean;

	get supportedLangs() {
		return this.translate.langs;
	}

	get currentLang() {
		return this.translate.currentLang;
	}

	constructor(
		private translate: TranslateService,
	) { }

	toogleTheme() {
		this.onToogleTheme.emit();
	}

	changeLang(lang: string) {
		this.onChangeLang.emit(lang);
	}

	contactMe() {
		this.onContactMe.emit();
	}

	toogleMenu() {
		this.onToogleMenu.emit();
	}
}
