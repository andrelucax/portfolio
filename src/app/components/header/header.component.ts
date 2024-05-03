import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { AndreBotDialogComponent } from '../dialogs/andre-bot-dialog/andre-bot-dialog.component';
import { Overlay } from '@angular/cdk/overlay';

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

	isBotDialogOpen: boolean;

	get currentLang() {
		return this.translate.currentLang;
	}

	constructor(
		private translate: TranslateService,
		private dialog: MatDialog,
		private overlay: Overlay,
	) {

	}

	toogleTheme() {
		this.onToogleTheme.emit();
	}

	changeLangue(lang: string) {
		this.translate.use(lang);
	}

	contactMe() {
		this.isBotDialogOpen = true;
		this.dialog.open(AndreBotDialogComponent, {
			position: {
				right: '40px',
				bottom: '40px',
			},
			panelClass: 'andrep-bot-dialog-pannel',
			scrollStrategy: this.overlay.scrollStrategies.noop(),
			hasBackdrop: false,
		}).afterClosed().subscribe(_ => this.isBotDialogOpen = false);
	}
}
