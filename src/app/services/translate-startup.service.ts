import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
	providedIn: 'root'
})
export class TranslateStartupService {

	constructor(
		private translate: TranslateService,
	) { }

	init() {
		this.translate.setDefaultLang('en');
		this.translate.use('en');
	}
}
