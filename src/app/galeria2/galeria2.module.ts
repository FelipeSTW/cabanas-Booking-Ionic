import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Galeria2PageRoutingModule } from './galeria2-routing.module';

import { Galeria2Page } from './galeria2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Galeria2PageRoutingModule
  ],
  declarations: [Galeria2Page]
})
export class Galeria2PageModule {}
