import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RutaLoginComponent} from './rutas/ruta-login/ruta-login.component';
import {RutaGestionUsuariosComponent} from './rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component';
import {RutaMenuComponent} from "./rutas/ruta-menu/ruta-menu.component";
import {RutaRegistroComponent} from "./rutas/ruta-registro/ruta-registro.component";
import {RutaActualizarUsuarioComponent} from "./rutas/ruta-actualizar-usuario/ruta-actualizar-usuario.component";

const routes: Routes = [
  {
    path: 'login',
    component: RutaLoginComponent
  },
  {
    path: 'registro',
    component: RutaRegistroComponent
  },
  {
    path: 'menu',
    component: RutaMenuComponent,
    children: [
      {
        path: 'gestion-usuarios',
        component: RutaGestionUsuariosComponent
      },
      {
        path: 'actualizar-usuario/:idUsuario',
        component: RutaActualizarUsuarioComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
