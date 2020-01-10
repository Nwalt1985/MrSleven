import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class AboutTextService {

  constructor(private http: HttpClient) { }

  getAboutContent() {
    return this.http.get('/about/content');
  }

}
