import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../authentication.service';
import { AboutTextService } from '../../../public/aboutTextComponent/about-text.service';
import { TokenPayloadABoutImages } from '../../../../app-interfaces';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-about-image-mobile',
  templateUrl: './aboutImageMobile.component.html',
  styleUrls: ['css/aboutImageMobile.component.scss']
})

export class AdminAboutImageMobileComponent implements OnInit {

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

    if (form.value.imageMobileAlt !== '' ) {
      this.aboutImages.images[2].alt = form.value.imageMobileAlt;
    }

    if ( form.value.imageMobileUrl !== '' ) {
      this.aboutImages.images[2].src = form.value.imageMobileUrl;
    }

    this.auth.updateAboutImage(this.aboutImages)
      .subscribe(
        () => {
          alert('Mobile Image updated.');
        },
        err => {
          console.error(err);
        }
      );
  }
}
