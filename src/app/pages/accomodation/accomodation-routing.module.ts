import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccomodationPage } from './accomodation.page';

const routes: Routes = [
  {
    path: '',
    component: AccomodationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccomodationPageRoutingModule {}
