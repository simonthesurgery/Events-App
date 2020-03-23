// Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';

// Modules
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';

// Services
import { EventService } from './services/event.service';
import { ChatModal } from './modals/chat/chat.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { CommentsModal } from './modals/comments/comments.page';

// Pipes

@NgModule({
	declarations: [
		AppComponent,
		ChatModal,
		CommentsModal,
	],
	entryComponents: [
		ChatModal,
		CommentsModal,
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		ComponentsModule
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		EventService,
		DatePipe
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
