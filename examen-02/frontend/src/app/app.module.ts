import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./servicios/rest/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    RutaLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClient
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
