import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class ContactFormService {

  constructor(private http: HttpClient) { }

  submitUserEmail( data: object ) {
    console.log( 'in service:', data);
  }

}
