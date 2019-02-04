import { Injectable } from '@angular/core';
import {Raza} from "../../../../../../03-angular/videos/src/app/interfaces/raza";
import {environment} from "../../../../../../03-angular/videos/src/environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {Usuario} from "../../interfaces/usuario";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuario: any = {
    createdAt: 1548111468827,
    id: 1,
    nombre: 'Pudle',
    password: '1234',
    updatedAt: 1548111468827,
    correo: 'olmedo2408@gmail.com'
  };

  constructor(private readonly _httpClient: HttpClient) {

  }

  login(correo: string,
        password: string): Observable<Raza> {

    const url = environment.url + '/usuario/login';

    return this._httpClient
      .post(url, {
        correo: correo,
        password: password
      })
      .pipe(map(r => <Usuario>r)); // Casteo

  }
}
