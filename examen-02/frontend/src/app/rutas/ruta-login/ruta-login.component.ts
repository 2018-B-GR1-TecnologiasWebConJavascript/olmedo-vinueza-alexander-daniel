import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../servicios/rest/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.css']
})
export class RutaLoginComponent implements OnInit {

  usuario = {
    correo: '',
    password: ''
  };

  constructor(private readonly _authService: AuthService, private readonly _router: Router) { }

  ngOnInit() {
  }

  login() {

    const respuestaLogin$ = this._authService
      .login(
        this.usuario.correo,
        this.usuario.password
      );

    respuestaLogin$
      .subscribe(
        (usuario) => {
          this._authService.usuario = usuario;
          const url = [
            '/'
          ];
          alert('Login exitoso');
          this._router.navigate(url);
          console.log(usuario);
        },
        (error) => {
          console.error(error);
        }
      );

  }

}
