import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccomodationPageRoutingModule } from './accomodation-routing.module';

import { AccomodationPage } from './accomodation.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	AccomodationPageRoutingModule,
	ComponentsModule
  ],
  declarations: [AccomodationPage]
})
export class AccomodationPageModule {}
