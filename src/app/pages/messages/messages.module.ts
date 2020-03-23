import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagesPage } from './messages.page';
import { MessagesPageRoutingModule } from './messages-routing.module'

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		ComponentsModule,
		MessagesPageRoutingModule
	],
	declarations: [MessagesPage]
})
export class MessagesPageModule { }
