import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeriaf1',
  templateUrl: './galeriaf1.page.html',
  styleUrls: ['./galeriaf1.page.scss'],
})
export class Galeriaf1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  imagenes = [
    'cabana1.jpg',
    'cabana2.jpg',
    'cocina.jpg',
    'living.jpg',
    'dorm1.jpg',
    'dorm2.jpg',
    'living2.jpg',
    'bano.jpg'
  ]

}
