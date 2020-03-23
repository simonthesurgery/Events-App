import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TalkPageRoutingModule } from './talk-routing.module';

import { TalkPage } from './talk.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TalkPageRoutingModule,
	ComponentsModule
  ],
  declarations: [TalkPage]
})
export class TalkPageModule {}
