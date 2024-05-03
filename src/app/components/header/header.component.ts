import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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

	get currentLang() {
		return this.translate.currentLang;
	}

	constructor(
		private translate: TranslateService,
	) {

	}

	toogleTheme() {
		this.onToogleTheme.emit();
	}

	changeLangue(lang: string) {
		this.translate.use(lang);
	}

	contactMe() {

	}
}
