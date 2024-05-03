import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LayoutComponent } from './components/layout/layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { TranslateLoader, TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatMenuModule } from '@angular/material/menu';
import { SvgIconStartupService } from './services/svg-icon-startup.service';
import { TranslateStartupService } from './services/translate-startup.service';
import { ExperienceComponent } from './components/experience/experience.component';
import { MatChipsModule } from '@angular/material/chips';
import { ConsoleGreetingsService } from './services/console-greetings.service'; 3
import { MatDialogModule } from '@angular/material/dialog';
import { AndreBotDialogComponent } from './components/dialogs/andre-bot-dialog/andre-bot-dialog.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http);
}

@NgModule({
	declarations: [
		AppComponent,
		LayoutComponent,
		HeaderComponent,
		HomeComponent,
		ExperienceComponent,
		AndreBotDialogComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MatSidenavModule,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		HttpClientModule,
		MatMenuModule,
		MatChipsModule,
		MatDialogModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
		}),
	],
	providers: [
		provideAnimationsAsync(),
		{
			provide: APP_INITIALIZER,
			useFactory: (s: SvgIconStartupService) => () => s.init(),
			deps: [SvgIconStartupService],
			multi: true,
		},
		{
			provide: APP_INITIALIZER,
			useFactory: (s: TranslateStartupService) => () => s.init(),
			deps: [TranslateStartupService],
			multi: true,
		},
		{
			provide: APP_INITIALIZER,
			useFactory: (s: ConsoleGreetingsService) => () => s.init(),
			deps: [ConsoleGreetingsService],
			multi: true,
		},
		TranslatePipe,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
