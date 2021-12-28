import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria2',
  templateUrl: './galeria2.page.html',
  styleUrls: ['./galeria2.page.scss'],
})
export class Galeria2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  imagenes = [
    'cabb.jpg',
    'cocina.jpg',
    'dorm1.jpg',
    'dorm2.jpg',
    'dormi3.jpg',
    'baño.jpg',
    'living.jpg',
    'terraza.jpg'
  ]
}
