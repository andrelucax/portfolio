import { NgModule } from '@angular/core';
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

@NgModule({
	declarations: [
		AppComponent,
		LayoutComponent,
		HeaderComponent,
		HomeComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MatSidenavModule,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
	],
	providers: [
		provideAnimationsAsync()
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
