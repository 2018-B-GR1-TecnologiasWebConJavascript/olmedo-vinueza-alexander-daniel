import { Component, OnInit } from '@angular/core';
import {Usuario, UsuarioService} from "../../servicios/usuario.service";

@Component({
  selector: 'app-ruta-gestion-usuarios',
  templateUrl: './ruta-gestion-usuarios.component.html',
  styleUrls: ['./ruta-gestion-usuarios.component.scss']
})
export class RutaGestionUsuariosComponent implements OnInit {

  usuarios = [];

  // Inyeccion de dependencias
  constructor(
    private readonly _usuarioService: UsuarioService
  ) {

  }

  ngOnInit() {
    // Cuando esta listo el web component para mostrarse
    this.usuarios = this._usuarioService.usuarios;
  }

  eliminar(usuario: Usuario){
    this._usuarioService.eliminar(usuario.id);
  }

}

