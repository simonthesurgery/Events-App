import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportantInformationPage } from './important-information.page';

const routes: Routes = [
  {
    path: '',
    component: ImportantInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportantInformationPageRoutingModule {}
