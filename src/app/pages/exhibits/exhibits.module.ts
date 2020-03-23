import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExhibitsPageRoutingModule } from './exhibits-routing.module';

import { ExhibitsPage } from './exhibits.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	ExhibitsPageRoutingModule,
	ComponentsModule
  ],
  declarations: [ExhibitsPage]
})
export class ExhibitsPageModule {}
