import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TalksPage } from './talks.page';

const routes: Routes = [
  {
    path: '',
    component: TalksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TalksPageRoutingModule {}
