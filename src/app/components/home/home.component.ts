import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent {

	navigateToSocialMidia(socialMidia: 'github' | 'linkedin' | 'instagram') {
		switch (socialMidia) {
			case 'github':
				window.open("https://github.com/andrelucax/", "_blank");
				break;
			case 'instagram':
				window.open("https://www.linkedin.com/in/andrelucax/", "_blank");
				break;
			case 'linkedin':
				window.open("https://www.instagram.com/andre.lucax/", "_blank");
				break;
		}
	}
}
