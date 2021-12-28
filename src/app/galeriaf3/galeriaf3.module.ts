import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Galeriaf3PageRoutingModule } from './galeriaf3-routing.module';

import { Galeriaf3Page } from './galeriaf3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Galeriaf3PageRoutingModule
  ],
  declarations: [Galeriaf3Page]
})
export class Galeriaf3PageModule {}
