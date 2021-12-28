import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Galeria2Page } from './galeria2.page';

const routes: Routes = [
  {
    path: '',
    component: Galeria2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Galeria2PageRoutingModule {}
