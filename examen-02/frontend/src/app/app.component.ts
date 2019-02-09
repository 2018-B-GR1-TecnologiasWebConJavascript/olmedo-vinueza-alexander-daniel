import {Component} from '@angular/core';
import {AuthService} from "./servicios/rest/auth.service";
import {UsuarioRestService} from "./servicios/rest/usuario-rest.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  constructor(
    private readonly _authService: AuthService,
    private readonly _usuarioService: UsuarioRestService,
    private readonly _router: Router) {
  }
  gestionUsuario(){
    console.log(this._authService.roles);
    try{
      if(this._authService.roles.some((rol)=>{return rol.nombre==="Administrador"})){
        const url = [
          '/',
          'menu',
          'gestion-usuarios'
        ];
        this._router.navigate(url);
      } else {
        const url = [
          '/',
          'login'
        ];
        this._router.navigate(url);
      }
    } catch (e) {
      const url = [
        '/',
        'login'
      ];
      this._router.navigate(url);
    }

  }
}
