import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Galeriaf2PageRoutingModule } from './galeriaf2-routing.module';

import { Galeriaf2Page } from './galeriaf2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Galeriaf2PageRoutingModule
  ],
  declarations: [Galeriaf2Page]
})
export class Galeriaf2PageModule {}
