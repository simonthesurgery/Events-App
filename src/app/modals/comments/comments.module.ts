import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentsModal } from './comments.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		ComponentsModule,
	],
	declarations: [
		CommentsModal
	],
	entryComponents: [
	],
	exports: [
		CommentsModal
	]
})
export class CommentsPageModule { }

