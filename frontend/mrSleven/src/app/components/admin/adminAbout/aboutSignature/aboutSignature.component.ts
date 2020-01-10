import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../authentication.service';
import { AboutTextService } from '../../../public/aboutTextComponent/about-text.service';
import { TokenPayloadABoutSignature } from '../../../../app-interfaces';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-about-signature',
  templateUrl: './aboutSignature.component.html',
  styleUrls: ['css/aboutSignature.component.scss']
})

export class AdminAboutSignatureComponent implements OnInit {

  constructor(private auth: AuthenticationService,
              public aboutService: AboutTextService) { }

  aboutSignature: TokenPayloadABoutSignature = {
    id: '',
    signature: {
      src: '',
      alt: ''
    }
  };

  ngOnInit() {
    // Get about page content to populate form
    this.aboutService.getAboutContent().subscribe((result: object) => {

      this.aboutSignature.id = result[0]._id;
      this.aboutSignature.signature = result[0].signature;

    });
  }

  updateSignature(form: NgForm) {

    if (form.value.signatureUrl !== '') {
      this.aboutSignature.signature.src = form.value.signatureUrl;
    }

    if (form.value.signatureAlt !== '') {
      this.aboutSignature.signature.alt = form.value.signatureAlt;
    }

    this.auth.updateAboutSignature(this.aboutSignature)
      .subscribe(
        () => {
          alert('Signature updated.');
        },
        err => {
          console.error(err);
        }
      );
  }
}
