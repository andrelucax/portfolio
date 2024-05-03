import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {

	constructor(
		translate: TranslateService,
		matIconRegistry: MatIconRegistry,
		domSanitizer: DomSanitizer,
	) {
		translate.setDefaultLang('en');
		translate.use('en');

		matIconRegistry.addSvgIcon('github', domSanitizer.bypassSecurityTrustResourceUrl('assets/icon/github-logo.svg'));
		matIconRegistry.addSvgIcon('instagram', domSanitizer.bypassSecurityTrustResourceUrl('assets/icon/instagram-logo.svg'));
		matIconRegistry.addSvgIcon('linkedin', domSanitizer.bypassSecurityTrustResourceUrl('assets/icon/linkedin-logo.svg'));
	}
}
