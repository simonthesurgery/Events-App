import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresentersPageRoutingModule } from './presenters-routing.module';

import { PresentersPage } from './presenters.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	PresentersPageRoutingModule,
	ComponentsModule
  ],
  declarations: [PresentersPage]
})
export class PresentersPageModule {}
