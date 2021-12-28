import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CajacomentPageRoutingModule } from './cajacoment-routing.module';

import { CajacomentPage } from './cajacoment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CajacomentPageRoutingModule
  ],
  declarations: [CajacomentPage]
})
export class CajacomentPageModule {}
