import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../authentication.service';
import { AboutTextService } from '../../../public/aboutTextComponent/about-text.service';
import { TokenPayloadABoutImages } from '../../../../app-interfaces';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-about-image-left',
  templateUrl: './aboutImageLeft.component.html',
  styleUrls: ['css/aboutImageLeft.component.scss']
})

export class AdminAboutImageLeftComponent implements OnInit {

  constructor(private auth: AuthenticationService,
              public aboutService: AboutTextService) { }

  aboutImages: TokenPayloadABoutImages = {
    id: '',
    images: []
  };

  ngOnInit() {
    // Get about page content to populate form
    this.aboutService.getAboutContent().subscribe((result: object) => {

      this.aboutImages.id = result[0]._id;
      this.aboutImages.images = result[0].images;

    });
  }

  updateImage(form: NgForm) {

    if ( form.value.imageLeftAlt !== '' ) {
      this.aboutImages.images[0].alt = form.value.imageLeftAlt;
    }

    if ( form.value.imageLeftUrl !== '' ) {
      this.aboutImages.images[0].src = form.value.imageLeftUrl;
    }

    this.auth.updateAboutImage( this.aboutImages )
      .subscribe(
        () => {
          alert('Image updated.');
        },
        err => {
          console.error(err);
        }
      );
  }
}
