import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../authentication.service';
import { NgForm } from '@angular/forms';
import { TokenPayloadEmailAddress } from '../../../../app-interfaces';

@Component({
  selector: 'app-admin-contact-update-email',
  templateUrl: 'updateEmail.component.html',
  styleUrls: ['css/updateEmail.component.scss']
})

export class UpdateEmailAddressComponent implements OnInit {

  constructor(private auth: AuthenticationService ) { }

  emailAddress: TokenPayloadEmailAddress = {
    id: '',
    delivery_email: ''
  };

  ngOnInit() {
    this.auth.getEmailAddress().subscribe(( result: object ) => {
      this.emailAddress.id = result[0]._id;
      this.emailAddress.delivery_email = result[0].delivery_email;
    });
  }

  updateEmail( form: NgForm ) {

    if (form.value.adminEmail !== '' ) {
      this.emailAddress.delivery_email = form.value.adminEmail;
    }

    if (confirm(`Are you sure you want to update the delivery email address?`)) {

      this.auth.updateEmailAddress( this.emailAddress ).subscribe(
        () => {
          alert('E-mail updated.');
        },
        err => {
          console.error(err);
        }
      );
    }

  }
}
