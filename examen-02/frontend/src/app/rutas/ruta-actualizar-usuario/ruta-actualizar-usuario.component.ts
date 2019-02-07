import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsuarioRestService} from "../../servicios/rest/usuario-rest.service";
import {Raza} from "../../../../../../03-angular/videos/src/app/interfaces/raza";
import {Usuario} from "../../interfaces/usuario";

@Component({
  selector: 'app-ruta-actualizar-usuario',
  templateUrl: './ruta-actualizar-usuario.component.html',
  styleUrls: ['./ruta-actualizar-usuario.component.css']
})
export class RutaActualizarUsuarioComponent implements OnInit {

  roles = [
    {name:'Administrador'},
    {name:'Usuario'}
  ];

  rolSeleccionado: any;

  usuarioAActualizar = {
    nombre: '',
    correo: '',
    fecha_nacimiento: ''
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
  }

}

interface ParametrosRutaActualizarUsuario {
  idUsuario: string;
}
