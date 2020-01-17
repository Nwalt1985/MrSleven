import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions,
         NgxGalleryImage,
         NgxGalleryAnimation } from 'ngx-gallery';

import { GalleryImageViewComponent } from '../galleryImageViewComponent/imageViewComponent';
import { MatDialog } from '@angular/material/dialog';

import { GalleryImageService } from './gallery.service';

@Component({
  selector: 'app-gallery-component',
  templateUrl: 'gallery.component.html',
  styleUrls: ['css/gallery.component.scss']
})

export class GalleryComponent implements OnInit {

  constructor( public galleryService: GalleryImageService,
               public dialog: MatDialog ) {}

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  galleryLimit = 8;

  ngOnInit() {
    this.galleryImages = [];

    this.galleryService.getImages().subscribe(result => {
      for ( const index in result ) {
        if ( result ) {
          this.galleryImages.push({
            small: result[index].secure_url,
            medium: result[index].secure_url,
            big: result[index].secure_url,
            description: result[index].context.custom.alt,
          });
        }
      }
    });

    /* Set the galley options : https://www.npmjs.com/package/ngx-gallery */
    this.galleryOptions = [
      {
        width: '100%',
        height: '70vh',
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

  }

  openImageModal( src: string, alt: string ) {
    const dialogRef = this.dialog.open( GalleryImageViewComponent, {
      width: '80%',
      data : {
        url: src,
        desc: alt
      }
    });

    dialogRef.afterClosed().subscribe( result => {});

  }

  showMore() {
    this.galleryLimit = this.galleryLimit + 8;
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  resetGalleryLimit() {
    this.galleryLimit = 8;
  }
}
