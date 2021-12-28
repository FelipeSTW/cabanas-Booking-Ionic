import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {ModalController} from '@ionic/angular';
import {LoginPage} from '../login/login.page';
import { LoginPageModule } from '../login/login.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public form = [
    { val: 'check', isChecked: true },
    { val: 'check', isChecked: false },
    { val: 'check', isChecked: false }
  ];
  constructor(private menu: MenuController, private modalCtr : ModalController) {}
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  toggleMenu() {
   this.menu.toggle();

}
}
