import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeriaf3',
  templateUrl: './galeriaf3.page.html',
  styleUrls: ['./galeriaf3.page.scss'],
})
export class Galeriaf3Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  imagenes = [
    'cabana3.jpg',
    'cocina.jpg',
    'comedor.jpg',
    'living.jpg',
    'dorm.jpg',
    'patio.jpg',
    'vista.jpg',
    'balcon.jpg'
  ]

}
