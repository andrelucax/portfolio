import { Overlay, OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { AndreBotDialogComponent } from '../dialogs/andre-bot-dialog/andre-bot-dialog.component';
import { Constants } from '../../classes/constants';
import { TranslateService } from '@ngx-translate/core';

const widthThreshold: number = 767;

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {

	@ViewChild("sideNavContent") sideNavContent: MatSidenavContent;
	@ViewChild("sideNav") sideNav: MatSidenav;

	isDark: boolean = true;

	animateLogo: boolean = true;

	isBotDialogOpen: boolean;

	screenWidth: number;

	get supportedLangs() {
		return this.translate.langs;
	}

	constructor(
		private overlayContainer: OverlayContainer,
		private dialog: MatDialog,
		private overlay: Overlay,
		private translate: TranslateService,
	) { }

	ngOnInit(): void {
		const storedPreferredTheme = sessionStorage.getItem(Constants.preferredThemeSessionStorageKey);
		if (storedPreferredTheme && storedPreferredTheme == 'light') {
			this.toogleTheme();
		} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
			this.toogleTheme();
		}
	}

	ngAfterViewInit(): void {
		addEventListener('scroll', this.checkLogoAnimation);
		addEventListener('resize', this.handleResize);
	}

	ngOnDestroy(): void {
		removeEventListener('scroll', this.checkLogoAnimation);
		removeEventListener('resize', this.handleResize);
	}

	handleResize = (_?: any) => {
		if (window.innerWidth > widthThreshold) {
			this.sideNav?.close();
		}
	}

	checkLogoAnimation = (_: any) => {
		const scrollY = this.sideNavContent.getElementRef().nativeElement.scrollTop || document.documentElement.scrollTop;
		const threshold = 0;

		if (scrollY > threshold) {
			this.animateLogo = false;
		} else {
			this.animateLogo = true;
		}
	}

	toogleTheme() {
		this.isDark = !this.isDark;
		if (!this.isDark) {
			sessionStorage.setItem(Constants.preferredThemeSessionStorageKey, 'light');
			this.overlayContainer.getContainerElement().classList.add('light-theme');
		} else {
			sessionStorage.setItem(Constants.preferredThemeSessionStorageKey, 'dark');
			this.overlayContainer.getContainerElement().classList.remove('light-theme');
		}
	}

	toogleMenu() {
		this.sideNav.toggle();
	}

	changeLang(lang: string) {
		this.translate.use(lang);
		sessionStorage.setItem(Constants.preferredLangSessionStorageKey, lang);
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
