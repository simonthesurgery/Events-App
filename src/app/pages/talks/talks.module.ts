import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TalksPageRoutingModule } from './talks-routing.module';

import { TalksPage } from './talks.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TalksPageRoutingModule,
	ComponentsModule
  ],
  declarations: [TalksPage]
})
export class TalksPageModule {}
