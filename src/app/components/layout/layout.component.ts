import { Component, ViewChild } from '@angular/core';
import { MatSidenavContent } from '@angular/material/sidenav';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrl: './layout.component.scss'
})
export class LayoutComponent {

	@ViewChild("sideNavContent") sideNavContent: MatSidenavContent;

	animateLogo: boolean = true;

	ngAfterViewInit(): void {
		this.sideNavContent.getElementRef().nativeElement.addEventListener('scroll', this.checkLogoAnimation);
	}

	ngOnDestroy(): void {
		this.sideNavContent.getElementRef().nativeElement.removeEventListener('scroll', this.checkLogoAnimation);
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
}
