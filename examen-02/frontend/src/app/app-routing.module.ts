import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RutaLoginComponent} from './rutas/ruta-login/ruta-login.component';
import {RutaGestionUsuariosComponent} from './rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component';
import {RutaMenuComponent} from "./rutas/ruta-menu/ruta-menu.component";
import {RutaRegistroComponent} from "./rutas/ruta-registro/ruta-registro.component";
import {RutaActualizarUsuarioComponent} from "./rutas/ruta-actualizar-usuario/ruta-actualizar-usuario.component";
import {UsuarioMainComponent} from "./Modulos/usuario-main/usuario-main.component";

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
  },
  {
    path: 'usuario',
    component: UsuarioMainComponent,
    // children:[
    //   {
    //     path: '',
    //     pathMatch: 'full',
    //     redirectTo: 'gestionUsuario',
    //   },
    //   {
    //     path: 'gestionUsuario',
    //     component: UsuarioVisualizarComponent,
    //     canActivate: [
    //       IsUsuarioServiceService
    //     ]
    //   },
    //   {
    //     path: 'crearPaciente',
    //     component: PacienteCrearComponent,
    //   },
    //   {
    //     path: 'actualizarPaciente/:idPaciente',
    //     component: UsuarioActualizarComponent,
    //   },
    //   {
    //     path: 'gestionConductor',
    //     component: AutoVisualizarComponent,
    //   },
    //   {
    //     path: 'crearAuto',
    //     component: AutoCrearComponent,
    //   },
    //   {
    //     path: 'actualizarAuto/:idAuto',
    //     component: AutoActualizarComponent,
    //   },
    //   {
    //     path: 'gestionEvento',
    //     component: EventoVerComponent,
    //   },
    //   {
    //     path: 'actualizarEvento/:idEvento',
    //     component:EventoActualizarComponent,
    //   },
    //   {
    //     path: 'crearEvento',
    //     component: EventoCrearComponent,
    //   },
    //   {
    //     path: 'Eventos',
    //     component: EventoVisualizarComponent,
    //     children: [
    //       {
    //         path: 'Autos/:idEvento',
    //         component: EventoVerAutoComponent
    //       }
    //     ]
    //   },
    //   {
    //     path: 'eventAuto',
    //     component: EventoAutoMainComponent,
    //     children:[
    //       {
    //         path: '',
    //         pathMatch: 'full',
    //         redirectTo: 'EventoAuto'
    //       },
    //       {
    //         path: 'EventoAuto',
    //         component: EventoAutoVisualizarComponent
    //       },
    //       {
    //         path: 'AgregarEventoAutoo',
    //         component: EventoAutoAgregarComponent
    //       }
    //     ]
    //   }
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
