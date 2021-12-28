import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Galeria3PageRoutingModule } from './galeria3-routing.module';

import { Galeria3Page } from './galeria3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Galeria3PageRoutingModule
  ],
  declarations: [Galeria3Page]
})
export class Galeria3PageModule {}
