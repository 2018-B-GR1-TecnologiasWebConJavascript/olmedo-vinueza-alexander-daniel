import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Usuario} from "../../interfaces/usuario";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario: any = {
    createdAt: 1548111468827,
    id: 1,
    nombre: 'Alexander',
    password: '1234',
    updatedAt: 1548111468827,
    correo: 'olmedo2408@gmail.com'
  };

  roles: any;

  constructor(private readonly _httpClient: HttpClient) {

  }
  login(correo: string,
        password: string): Observable<Usuario> {

    const url = environment.url + '/usuario/login';

    return this._httpClient
      .post(url, {
        correo: correo,
        password: password
      })
      .pipe(map(r => <Usuario>r)); // Casteo

  }
}
