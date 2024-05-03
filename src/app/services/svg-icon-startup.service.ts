import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
	providedIn: 'root'
})
export class SvgIconStartupService {

	constructor(
		private matIconRegistry: MatIconRegistry,
		private domSanitizer: DomSanitizer,
	) { }

	init() {
		this.matIconRegistry.addSvgIcon('github', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icon/github-logo.svg'));
		this.matIconRegistry.addSvgIcon('instagram', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icon/instagram-logo.svg'));
		this.matIconRegistry.addSvgIcon('linkedin', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icon/linkedin-logo.svg'));
	}
}
