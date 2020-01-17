import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../authentication.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-contact-update-email',
  templateUrl: 'updateEmail.component.html',
  styleUrls: ['css/updateEmail.component.scss']
})

export class UpdateEmailAddressComponent implements OnInit {

  constructor(private auth: AuthenticationService ) { }

  emailAddress = {};

  ngOnInit() {
    this.auth.getEmailAddress().subscribe( (result: object) => {
      this.emailAddress = result;
    });
  }

  updateEmail(form: NgForm) {

  }
}
