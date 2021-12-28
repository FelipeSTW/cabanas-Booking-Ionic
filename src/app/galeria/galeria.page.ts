import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  imagenes = [
    'cabania 1.jpg',
    'cabania.jpg',
    'cocina1.jpg',
    'des 1.jpg',
    'dorm1.jpg',
    'dormi1.jpg',
    'mesa1.jpg',
    'terraza1.jpg'
  ]




}
