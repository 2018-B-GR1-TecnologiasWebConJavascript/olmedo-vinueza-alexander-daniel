import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RutaLoginComponent} from './rutas/ruta-login/ruta-login.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RutaMenuComponent} from './rutas/ruta-menu/ruta-menu.component';
import {RutaGestionUsuariosComponent} from "./rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component";
import {AuthService} from "./servicios/rest/auth.service";
import {UsuarioRestService} from "./servicios/rest/usuario-rest.service";
import {TableModule} from "primeng/table";
import {
  ButtonModule,
  DropdownModule,
  InputTextModule,
  MessageModule,
  MessagesModule,
  ToolbarModule
} from "primeng/primeng";
import {RutaRegistroComponent} from './rutas/ruta-registro/ruta-registro.component';
import {RutaActualizarUsuarioComponent} from './rutas/ruta-actualizar-usuario/ruta-actualizar-usuario.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { UsuarioMainComponent } from './modulos/usuario-main/usuario-main.component';
import { ConductorVisualizarComponent } from './modulos/modulo-conductor/conductor-visualizar/conductor-visualizar.component';
import { ConductorCrearComponent } from './modulos/modulo-conductor/conductor-crear/conductor-crear.component';
import { FormConductorComponent } from './componentes/form-conductor/form-conductor.component';
import { ConductorActualizarComponent } from './modulos/modulo-conductor/conductor-actualizar/conductor-actualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaMenuComponent,
    RutaGestionUsuariosComponent,
    RutaRegistroComponent,
    RutaActualizarUsuarioComponent,
    UsuarioMainComponent,
    ConductorVisualizarComponent,
    ConductorCrearComponent,
    FormConductorComponent,
    ConductorActualizarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    BrowserAnimationsModule,
    ToolbarModule,
    MessagesModule,
    MessageModule
  ],
  providers: [
    AuthService,
    UsuarioRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
