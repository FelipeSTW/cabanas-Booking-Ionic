import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria3',
  templateUrl: './galeria3.page.html',
  styleUrls: ['./galeria3.page.scss'],
})
export class Galeria3Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  imagenes = [
    'cab3.jpg',
    'cocina.jpg',
    'dorm1.jpg',
    'dorm2.jpg',
    'dorm3.jpg',
    'banio1.jpg',
    'living.jpg'
  ]
}
