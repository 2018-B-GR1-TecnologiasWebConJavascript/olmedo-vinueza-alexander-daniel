import { Component, OnInit } from '@angular/core';
import {Usuario, UsuarioService} from "../../servicios/usuario.service";
import {RazaRestService} from "../../servicios/rest/raza-rest.service";
import {Raza} from "../../interfaces/raza";


@Component({
  selector: 'app-ruta-gestion-usuarios',
  templateUrl: './ruta-gestion-usuarios.component.html',
  styleUrls: ['./ruta-gestion-usuarios.component.scss']
})
export class RutaGestionUsuariosComponent implements OnInit {

  usuarios = [];

  // Inyeccion de dependencias
  constructor(
    private readonly _razaRestService: RazaRestService
  ) {

  }

  ngOnInit() {
    // Cuando esta listo el web component para mostrarse
    const razas$ = this._razaRestService.findAll();
    razas$
      .subscribe(
        (razas: Raza[])=>{
          console.log(razas);
        },
        (error)=>{
          console.error('Error', error);
        }
      )
  }

  eliminar(usuario: Usuario){
    // this._usuarioService.eliminar(usuario.id);
  }

}

