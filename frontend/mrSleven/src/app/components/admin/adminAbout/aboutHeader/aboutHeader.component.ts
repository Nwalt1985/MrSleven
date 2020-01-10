import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../authentication.service';
import { NgForm } from '@angular/forms';
import { AboutTextService } from '../../../public/aboutTextComponent/about-text.service';
import { TokenPayloadABoutHeader } from '../../../../app-interfaces';


@Component({
    selector: 'app-admin-about-header',
    templateUrl: 'aboutHeader.component.html',
    styleUrls: ['css/aboutHeader.component.scss']
})

export class AdminAboutHeaderComponent implements OnInit {

    constructor(private auth: AuthenticationService,
                public aboutService: AboutTextService ) {}

    aboutID = '';

    aboutHeaderText: TokenPayloadABoutHeader = {
      id: '',
      header: '',
      url: ''
    };

    ngOnInit() {
      // Get about page content to populate form
      this.aboutService.getAboutContent().subscribe(( result: object ) => {
        this.aboutID = result[0]._id;
        this.aboutHeaderText.header = result[0].header;
        this.aboutHeaderText.url = result[0].headerUrl;
      });
    }

    updateHeader( form: NgForm ) {
      // Get ID and form values to be updated
      this.aboutHeaderText.id = this.aboutID;
      this.aboutHeaderText.header = form.value.aboutHeader;
      this.aboutHeaderText.url = form.value.aboutHeaderUrl;

      this.auth.updateAboutHeader( this.aboutHeaderText )
        .subscribe(
          () => {
            alert('Header updated.');
          },
          err => {
            console.error(err);
          }
        );
    }

}
