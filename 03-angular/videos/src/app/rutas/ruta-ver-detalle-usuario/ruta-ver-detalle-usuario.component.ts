import { Component, OnInit } from '@angular/core';
import {Usuario, UsuarioService} from "../../servicios/usuario.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ruta-ver-detalle-usuario',
  templateUrl: './ruta-ver-detalle-usuario.component.html',
  styleUrls: ['./ruta-ver-detalle-usuario.component.scss']
})
export class RutaVerDetalleUsuarioComponent implements OnInit {

  usuario: Usuario;

  constructor(
    private readonly _usuarioService: UsuarioService,
    private readonly _route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const rutaActiva$ = this._route.params;
    rutaActiva$
      .subscribe( // ASYNC
        (parametros) => {

          // parametros ->
          const usuarioEncontrado = this._usuarioService.buscarPorId(+parametros.idUsuario);

          this.usuario = usuarioEncontrado;
        }
    )
  }

}
