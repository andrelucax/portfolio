import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenavContent } from '@angular/material/sidenav';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {

	@ViewChild("sideNavContent") sideNavContent: MatSidenavContent;

	isDark: boolean = true;

	animateLogo: boolean = true;

	constructor(
		private overlayContainer: OverlayContainer,
	) { }

	ngOnInit(): void {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
			this.toogleTheme();
		}
	}

	ngAfterViewInit(): void {
		addEventListener('scroll', this.checkLogoAnimation);
	}

	ngOnDestroy(): void {
		removeEventListener('scroll', this.checkLogoAnimation);
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
			this.overlayContainer.getContainerElement().classList.add('light-theme');
		} else {
			this.overlayContainer.getContainerElement().classList.remove('light-theme');
		}
	}
}
