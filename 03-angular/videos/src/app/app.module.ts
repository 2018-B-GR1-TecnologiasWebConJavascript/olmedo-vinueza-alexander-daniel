import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaPerfilComponent } from './rutas/ruta-perfil/ruta-perfil.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { Ruta404Component } from './rutas/ruta404/ruta404.component';
import { RutaMenuComponent } from './rutas/ruta-menu/ruta-menu.component';
import { RutaGestionUsuariosComponent } from './rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component';
import { RutaGestionProductosComponent } from './rutas/ruta-gestion-productos/ruta-gestion-productos.component';
import {UsuarioService} from "./servicios/usuario.service";
import { RutaVerDetalleUsuarioComponent } from './rutas/ruta-ver-detalle-usuario/ruta-ver-detalle-usuario.component';
import {HttpClientModule} from "@angular/common/http";
import {RazaRestService} from "./servicios/rest/raza-rest.service";

@NgModule({
  declarations: [  // Components
    AppComponent,
    RutaInicioComponent,
    RutaPerfilComponent,
    RutaLoginComponent,
    Ruta404Component,
    RutaMenuComponent,
    RutaGestionUsuariosComponent,
    RutaGestionProductosComponent,
    RutaVerDetalleUsuarioComponent
  ],
  imports: [  // Modulos
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  // Acceso a un servicio Httpclient
  ],
  providers: [
    UsuarioService,
    RazaRestService
  ],  // Servicios
  bootstrap: [AppComponent]  // Componente Principal
})
export class AppModule { }

/*
Componente Principal
    router-outlet
    -Inicio
    -Login
    -Perfil
    -Menu
 */
