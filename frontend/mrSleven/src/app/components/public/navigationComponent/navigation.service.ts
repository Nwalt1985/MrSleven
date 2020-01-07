import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class NavigationService {

  constructor(private http: HttpClient) { }

  getNavigationContent() {
    return this.http.get('/nav/content');
  }

}
