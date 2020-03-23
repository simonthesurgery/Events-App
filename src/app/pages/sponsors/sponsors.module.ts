import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SponsorsPageRoutingModule } from './sponsors-routing.module';

import { SponsorsPage } from './sponsors.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	SponsorsPageRoutingModule,
	ComponentsModule
  ],
  declarations: [SponsorsPage]
})
export class SponsorsPageModule {}
