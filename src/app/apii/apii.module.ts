import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiiPageRoutingModule } from './apii-routing.module';

import { ApiiPage } from './apii.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiiPageRoutingModule
  ],
  declarations: [ApiiPage]
})
export class ApiiPageModule {}
