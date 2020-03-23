import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FloorPlanPageRoutingModule } from './floor-plan-routing.module';

import { FloorPlanPage } from './floor-plan.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	FloorPlanPageRoutingModule,
	ComponentsModule
  ],
  declarations: [FloorPlanPage]
})
export class FloorPlanPageModule {}
