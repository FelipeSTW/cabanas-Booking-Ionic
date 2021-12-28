import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeriaf2',
  templateUrl: './galeriaf2.page.html',
  styleUrls: ['./galeriaf2.page.scss'],
})
export class Galeriaf2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  imagenes = [
    'cabana2.jpg',
    'cabana23.jpg',
    'cocina26.jpg',
    'living 25.jpg',
    'dorm24.jpg',
    'terraza1.jpg',
    'cabana27.jpg',
    'bano26.jpg',
    'patio.jpg',
  ]

}
