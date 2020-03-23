import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component'
import { ModalHeaderComponent } from './modal-header/modal-header.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { CalendarComponent } from './calendar/calendar.component';
import { UpNextComponent } from './up-next/up-next.component';
import { EventListingComponent } from './event-listing/event-listing.component';
import { PeopleComponent } from './people/people.component';
import { CountdownComponent } from './countdown/countdown.component';
import { FeedComponent } from './feed/feed.component';
import { StatusComponent } from './status/status.component';
import { ExhibitsComponent } from './exhibits/exhibits.component';
import { AddressComponent } from './address/address.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
	declarations: [
		HeaderComponent,
		ModalHeaderComponent,
		PageHeaderComponent,
		CalendarComponent,
		UpNextComponent,
		EventListingComponent,
		PeopleComponent,
		CountdownComponent,
		FeedComponent,
		StatusComponent,
		ExhibitsComponent,
		AddressComponent,
		ChatBoxComponent,
		CommentComponent
	],
	exports: [
		HeaderComponent,
		ModalHeaderComponent,
		PageHeaderComponent,
		CalendarComponent,
		UpNextComponent,
		EventListingComponent,
		PeopleComponent,
		CountdownComponent,
		FeedComponent,
		StatusComponent,
		ExhibitsComponent,
		AddressComponent,
		ChatBoxComponent,
		CommentComponent
	],
	imports: [
		CommonModule,
		IonicModule
	],
	entryComponents: [
		HeaderComponent,
		ModalHeaderComponent,
		PageHeaderComponent,
		CalendarComponent,
		UpNextComponent,
		EventListingComponent,
		PeopleComponent,
		CountdownComponent,
		FeedComponent,
		StatusComponent,
		ExhibitsComponent,
		AddressComponent,
		ChatBoxComponent,
		CommentComponent
	]
})
export class ComponentsModule { }
