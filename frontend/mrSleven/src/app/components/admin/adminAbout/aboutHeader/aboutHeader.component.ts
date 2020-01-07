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

    aboutHeaderText: TokenPayloadABoutHeader = {
      header: '',
      current: ''
    };

    ngOnInit() {
      // Get about page content to populate form
      this.aboutService.getAboutTextContent().subscribe(( result: object ) => {
        this.aboutHeaderText.current = result[0].header;
      });
    }

    updateHeader( form: NgForm ) {

      this.aboutHeaderText.header = form.value.aboutHeader;

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
