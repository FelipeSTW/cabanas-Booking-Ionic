import { Component, OnInit } from '@angular/core';

import { UserService } from '../api/user.service';

@Component({
  selector: 'app-apii',
  templateUrl: './apii.page.html',
  styleUrls: ['./apii.page.scss'],
})
export class ApiiPage implements OnInit {
  lista: Array <any> = []
  usuarios
  constructor(public api:UserService) {
    this.ionViewDidLoad();
   }
  ionViewDidLoad(){
    this.api.obtenerDatos()
    .subscribe(
      (data) => {this.usuarios = data;},
      (error)=>{console.log(error);}
    )
  }

  ngOnInit() {
  }

}
