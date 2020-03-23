import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from 'src/app/components/components.module'

import { HomePageRoutingModule } from './home-routing.module'
import { HomePage } from './home.page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild([
			{
				path: '',
				component: HomePage
			}
		]),
		ComponentsModule,
		HomePageRoutingModule
	],
	declarations: [HomePage]
})
export class HomePageModule { }
