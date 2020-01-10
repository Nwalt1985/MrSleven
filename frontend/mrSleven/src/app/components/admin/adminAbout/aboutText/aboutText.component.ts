import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../authentication.service';
import { NgForm } from '@angular/forms';
import { AboutTextService } from '../../../public/aboutTextComponent/about-text.service';
import { TokenPayloadAboutText } from '../../../../app-interfaces';


@Component({
    selector: 'app-admin-about-text',
    templateUrl: 'aboutText.component.html',
    styleUrls: ['css/aboutText.component.scss']
})

export class AdminAboutTextComponent implements OnInit {

    constructor(private auth: AuthenticationService,
                public aboutService: AboutTextService ) {}

    aboutContent: TokenPayloadAboutText = {
      id: '',
      content: ''
    };

    ngOnInit() {
      // Get about page content to populate form
      this.aboutService.getAboutContent().subscribe(( result: object ) => {
        this.aboutContent.id = result[0]._id;
        this.aboutContent.content = result[0].content;
      });
    }

    updateAboutText( form: NgForm ) {
      // Get ID and form values to be updated
      if ( form.value.aboutContent !== '' ) {
        this.aboutContent.content = form.value.aboutContent;
      }

      this.auth.updateAboutText( this.aboutContent )
        .subscribe(
          () => {
            alert('Text updated.');
          },
          err => {
            console.error(err);
          }
        );
    }

}
