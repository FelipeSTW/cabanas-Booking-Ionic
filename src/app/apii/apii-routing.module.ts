import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiiPage } from './apii.page';

const routes: Routes = [
  {
    path: '',
    component: ApiiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiiPageRoutingModule {}
