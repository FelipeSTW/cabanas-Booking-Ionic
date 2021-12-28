import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Galeriaf1PageRoutingModule } from './galeriaf1-routing.module';

import { Galeriaf1Page } from './galeriaf1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Galeriaf1PageRoutingModule
  ],
  declarations: [Galeriaf1Page]
})
export class Galeriaf1PageModule {}
