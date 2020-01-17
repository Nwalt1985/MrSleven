import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class LogoService {

  constructor(private http: HttpClient) { }

  getLogo() {
    return this.http.get('/logo');
  }

}
