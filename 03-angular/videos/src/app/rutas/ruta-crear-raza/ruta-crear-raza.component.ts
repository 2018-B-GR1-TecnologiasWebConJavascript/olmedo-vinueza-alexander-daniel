import {Component, OnInit} from '@angular/core';
import {RazaRestService} from "../../servicios/rest/raza-rest.service";
import {Raza} from "../../interfaces/raza";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-ruta-crear-raza',
  templateUrl: './ruta-crear-raza.component.html',
  styleUrls: ['./ruta-crear-raza.component.scss']
})
export class RutaCrearRazaComponent implements OnInit {

  raza: Razaejemplo = {
    nombre: '',
    apellido: ''
  }

  constructor(private readonly _razaRestService: RazaRestService) {
  }

  ngOnInit() {
  }

  crearRaza(formulario:NgForm){

    console.log('Formulario: ',formulario);

    const crearRaza$ = this._razaRestService
      .create(this.raza.nombre);

    crearRaza$
      .subscribe(
        (raza:Raza)=>{
          console.log('Raza');
          alert(`Raza creada: ${raza.nombre}`);
        },
        (error) =>{
          console.error('Error: ', error)
        }
      )
  }

}

interface Razaejemplo {
  nombre: string;
  apellido:string;
}
