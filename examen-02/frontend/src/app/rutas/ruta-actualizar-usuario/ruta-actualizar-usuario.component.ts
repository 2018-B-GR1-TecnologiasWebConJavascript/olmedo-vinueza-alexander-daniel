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

  rolSeleccionado: Rol;

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
          console.log(roles);
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
  }

}

interface ParametrosRutaActualizarUsuario {
  idUsuario: string;
}
