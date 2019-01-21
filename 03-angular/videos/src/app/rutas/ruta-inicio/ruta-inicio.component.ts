import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-inicio',
  templateUrl: './ruta-inicio.component.html',
  styleUrls: ['./ruta-inicio.component.scss']
})
export class RutaInicioComponent implements OnInit {

  imagenes: Imagenes[] = [
    {
      anio: 2018,
      nombreImagen: '01.jpg',
      nombrePelicula: 'Capitana Marvel'
    },
    {
      anio: 2018,
      nombreImagen: '02.jpg',
      nombrePelicula: 'Bumblebee'
    },
    {
      anio: 2018,
      nombreImagen: '03.jpg',
      nombrePelicula: 'Artemis Fowl'
    },
    {
      anio: 2018,
      nombreImagen: '04.jpg',
      nombrePelicula: 'MiB International'
    }
  ];

  constructor() { }

  agregarCarrito(pelicula){
    console.log('Agregando al carrito', pelicula);
  }

  ngOnInit() {
  }

}

export interface Imagenes {
  nombreImagen: string;
  nombrePelicula: string;
  anio: number;
}
