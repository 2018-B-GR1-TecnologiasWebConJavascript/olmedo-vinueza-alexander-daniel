// auth.service.ts

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Raza} from '../../interfaces/raza';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {
  usuario;

  constructor(private readonly _httpClient: HttpClient) {

  }

  login(username: string,
        password: string): Observable<Raza> {

    const url = environment.url + '/raza/login';

    return this._httpClient
      .post(url, {
        username: username,
        password: password
      })
      .pipe(map(r => <Raza>r)); // Casteo

  }
}
