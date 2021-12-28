import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CajacomentPage } from './cajacoment.page';

const routes: Routes = [
  {
    path: '',
    component: CajacomentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CajacomentPageRoutingModule {}
