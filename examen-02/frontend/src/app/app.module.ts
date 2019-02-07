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
import {ButtonModule, DropdownModule, InputTextModule} from "primeng/primeng";
import {RutaRegistroComponent} from './rutas/ruta-registro/ruta-registro.component';
import {RutaActualizarUsuarioComponent} from './rutas/ruta-actualizar-usuario/ruta-actualizar-usuario.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaMenuComponent,
    RutaGestionUsuariosComponent,
    RutaRegistroComponent,
    RutaActualizarUsuarioComponent,
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
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    UsuarioRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
