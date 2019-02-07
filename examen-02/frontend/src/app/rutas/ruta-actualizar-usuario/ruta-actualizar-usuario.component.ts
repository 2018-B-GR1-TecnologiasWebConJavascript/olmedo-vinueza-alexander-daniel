import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsuarioRestService} from "../../servicios/rest/usuario-rest.service";
import {Usuario} from "../../interfaces/usuario";
import {Rol} from "../../interfaces/rol";

@Component({
  selector: 'app-ruta-actualizar-usuario',
  templateUrl: './ruta-actualizar-usuario.component.html',
  styleUrls: ['./ruta-actualizar-usuario.component.css']
})
export class RutaActualizarUsuarioComponent implements OnInit {

  roles = [];
  rolesDeUsuario;
  rolSeleccionado: Rol;
  columnas = [
    {field: 'nombre', header: 'Rol'},
    {field: 'id', header: 'Acciones'},
  ];

  usuarioAActualizar: Usuario = {
    id: 0,
    nombre: '',
    correo: '',
    fecha_nacimiento: '',
    password: ''
  };

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _usuarioRestService: UsuarioRestService,
    private readonly _router: Router
  ) { }

  ngOnInit() {
    const rutaActiva$ = this._activatedRoute.params;
    rutaActiva$
      .subscribe(
        (parametros: ParametrosRutaActualizarUsuario) => {

          this.findRolPorUsuario(parametros.idUsuario);

          const usuario$ = this._usuarioRestService
            .findOneById(parametros.idUsuario);
          usuario$
            .subscribe(
              (usuario: Usuario) => {
                this.usuarioAActualizar = usuario;
              },
              (error) => {
                console.error('Error: ', error);
              }
            );

        }
      );
    const roles$ = this._usuarioRestService
      .findAllRoles();
    roles$
      .subscribe(
        (roles: Rol[]) => {
          this.roles = roles;
        },
        (error) => {
          console.error('Error', error);
        }
      );

  }

  agregarRol(rolSeleccionado){
    const respuestaRolUsuario$ = this._usuarioRestService
      .asignarRol(
        this.usuarioAActualizar.id,
        this.rolSeleccionado.id
      );

    respuestaRolUsuario$
      .subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.error(error);
        }
      );
    this.findRolPorUsuario(this.usuarioAActualizar.id)
  }

  findRolPorUsuario(idUsuario){
    const roles$ = this._usuarioRestService
      .findRolPorUsuario(idUsuario);
    roles$
      .subscribe(
        (roles: Rol[]) => {
          console.log(roles);
          this.rolesDeUsuario = roles;
        },
        (error) => {
          console.error('Error', error);
        }
      );
  }


}

interface ParametrosRutaActualizarUsuario {
  idUsuario: string;
}
