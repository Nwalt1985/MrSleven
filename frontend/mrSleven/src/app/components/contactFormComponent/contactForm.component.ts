import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactFormService } from './contactForm.service';


@Component({
  selector: 'app-contact-form-component',
  templateUrl: './contactForm.component.html',
  styleUrls: [ 'css/contactForm.component.scss' ]
})

export class ContactFormComponent {
  title = 'Contact form';

  /* Regex to validate email string */
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  /* Honeypot */
  botCatchName = '';
  botCatchEmail = '';

  /* Dependancy injection. This allows access to the about-text.service*/
  constructor(public contactFormService: ContactFormService) { }

  validateFormData( form: NgForm ) {

    /* If the honeypot inputs get values then send alert */
    if ( this.botCatchName !== '' && this.botCatchName.length > 0  ||
         this.botCatchEmail !== '' && this.botCatchEmail.length > 0 ) {

      alert('Nice try Mr.Robot');
    }

    /* If we have no errors and form values then submit to service */
    if ( form.invalid ) {
      return;
    } else {

      const formData = {
        name: form.value.nameField,
        sender: form.value.emailField,
        message: form.value.messageField
      };

      this.contactFormService.submitUserEmail(formData);
    }

  }
}
