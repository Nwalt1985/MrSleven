import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions,
         NgxGalleryImage,
         NgxGalleryAnimation } from 'ngx-gallery';

// import 'hammerjs';

@Component({
  selector: 'app-gallery-component',
  templateUrl: 'gallery.component.html',
  styleUrls: ['css/gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  title = 'Gallery';

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {

    /* Set the galley options : https://www.npmjs.com/package/ngx-gallery */
    this.galleryOptions = [
      {
        width: '100%',
        height: '80vh',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 770,
        width: '100%',
        height: '80vh',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    /* Array of images objects to display */
    this.galleryImages = [
      {
        small: 'https://loremflickr.com/1024/768',
        medium: 'https://loremflickr.com/1024/768',
        big: 'https://loremflickr.com/1024/768'
      },
      {
        small: 'https://loremflickr.com/1024/768',
        medium: 'https://loremflickr.com/1024/768',
        big: 'https://loremflickr.com/1024/768'
      },
      {
        small: 'https://loremflickr.com/1024/768',
        medium: 'https://loremflickr.com/1024/768',
        big: 'https://loremflickr.com/1024/768'
      },
      {
        small: 'https://loremflickr.com/1024/768',
        medium: 'https://loremflickr.com/1024/768',
        big: 'https://loremflickr.com/1024/768'
      },
      {
        small: 'https://loremflickr.com/1024/768',
        medium: 'https://loremflickr.com/1024/768',
        big: 'https://loremflickr.com/1024/768'
      }
    ];
  }
}
