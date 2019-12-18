import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class ContactFormService {

  constructor(private http: HttpClient) { }

  submitUserEmail( data: any ) {

    return this.http.post('/contact/send', data);
  }

}
