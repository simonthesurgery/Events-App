import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresentersPage } from './presenters.page';

const routes: Routes = [
  {
    path: '',
    component: PresentersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresentersPageRoutingModule {}
