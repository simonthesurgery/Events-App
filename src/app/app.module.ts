// Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

// Modules
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';

// Services
import { EventService } from './services/event.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ComponentsModule } from './components/components.module';
// Pipes

@NgModule({
	declarations: [
		AppComponent,
	],
	entryComponents: [
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		ComponentsModule,
	],
	providers: [
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		EventService,
		DatePipe
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
