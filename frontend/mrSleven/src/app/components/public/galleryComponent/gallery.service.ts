import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class GalleryImageService {

  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get('/gallery/images');
  }

}
