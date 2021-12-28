import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Galeriaf1Page } from './galeriaf1.page';

const routes: Routes = [
  {
    path: '',
    component: Galeriaf1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Galeriaf1PageRoutingModule {}
