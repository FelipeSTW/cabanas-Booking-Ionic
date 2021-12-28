import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Galeriaf2Page } from './galeriaf2.page';

const routes: Routes = [
  {
    path: '',
    component: Galeriaf2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Galeriaf2PageRoutingModule {}
