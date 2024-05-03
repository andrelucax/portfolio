import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from '../classes/constants';

@Injectable({
	providedIn: 'root'
})
export class TranslateStartupService {

	constructor(
		private translate: TranslateService,
	) { }

	init() {
		this.translate.addLangs(['en', 'pt']);
		this.translate.setDefaultLang('en');

		const preferredLang = sessionStorage.getItem(Constants.preferredLangSessionStorageKey) ?? this.translate.getBrowserLang();
		if (preferredLang && this.translate.langs.includes(preferredLang)) {
			this.translate.use(preferredLang);
		} else {
			this.translate.use(this.translate.defaultLang);
		}
	}
}
