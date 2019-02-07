import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Usuario} from '../../interfaces/usuario';
import {map} from 'rxjs/operators';
import {Rol} from "../../interfaces/rol";

@Injectable({
  providedIn: 'root'
})
export class UsuarioRestService {

  nombreModelo = '/Usuario';

  constructor(private readonly _httpClient: HttpClient) {
  }

  findAll(): Observable<Usuario[]> {
    // OBSERVABLE
    const usuarios$ = this._httpClient
      .get(environment.url + this.nombreModelo)
      .pipe(map(r => <Usuario[]> r)); //

    return usuarios$;
  }

  findAllRoles(): Observable<Rol[]> {
    // OBSERVABLE
    const roles$ = this._httpClient
      .get(environment.url + '/rol')
      .pipe(map(r => <Rol[]> r)); //

    return roles$;
  }

  delete(id: number): Observable<Usuario> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <Usuario> r)); // Castear
  }

  create(nombre: string,
         correo: string,
         password: string,
         fecha_nacimiento: string): Observable<Usuario> {

    const objetoAGuardar = {
      nombre: nombre,
      correo: correo,
      password: password,
      fecha_nacimiento: fecha_nacimiento
    };

    const url = environment.url + this.nombreModelo;

    return this._httpClient
      .post(url, objetoAGuardar)
      .pipe(map(r => <Usuario> r)); // Castear
  }

  findOneById(id: number | string): Observable<Usuario> {
    const url = environment.url + this.nombreModelo
      + '/' + id;

    return this._httpClient
      .get(url)
      .pipe(map(r => <Usuario> r)); // Castear
  }

  updateOneById(usuario: Usuario) {

    const url = environment.url + this.nombreModelo
      + '/' + usuario.id;

    return this._httpClient
      .put(url, usuario)
      .pipe(map(r => <Usuario> r)); // Castear

  }

}
