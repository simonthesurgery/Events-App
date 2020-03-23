import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImportantInformationPageRoutingModule } from './important-information-routing.module';

import { ImportantInformationPage } from './important-information.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	ImportantInformationPageRoutingModule,
	ComponentsModule
  ],
  declarations: [ImportantInformationPage]
})
export class ImportantInformationPageModule {}
