import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class PageVisitService {

  constructor(private http: HttpClient) { }

  logVisit() {
    return this.http.get('/visit');
  }

}
