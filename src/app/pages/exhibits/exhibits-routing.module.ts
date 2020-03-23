import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExhibitsPage } from './exhibits.page';

const routes: Routes = [
  {
    path: '',
    component: ExhibitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExhibitsPageRoutingModule {}
