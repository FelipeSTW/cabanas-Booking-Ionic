import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Galeriaf3Page } from './galeriaf3.page';

const routes: Routes = [
  {
    path: '',
    component: Galeriaf3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Galeriaf3PageRoutingModule {}
