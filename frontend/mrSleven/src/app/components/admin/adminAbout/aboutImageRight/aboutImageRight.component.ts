import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../authentication.service';
import { AboutTextService } from '../../../public/aboutTextComponent/about-text.service';
import { TokenPayloadABoutImages } from '../../../../app-interfaces';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-about-image-right',
  templateUrl: './aboutImageRight.component.html',
  styleUrls: ['css/aboutImageRight.component.scss']
})

export class AdminAboutImageRightComponent implements OnInit {

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

    if ( form.value.imageRightAlt !== '' ) {
      this.aboutImages.images[1].alt = form.value.imageRightAlt;
    }

    if ( form.value.imageRightUrl !== '' ) {
      this.aboutImages.images[1].src = form.value.imageRightUrl;
    }

    this.auth.updateAboutImage(this.aboutImages)
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
