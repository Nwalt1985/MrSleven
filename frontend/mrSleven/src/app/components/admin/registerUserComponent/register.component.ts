import { Component } from '@angular/core';
import { AuthenticationService } from '../../../authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TokenPayload } from '../../../app-interfaces';

@Component({
  selector: 'app-register-component',
  templateUrl: './register.component.html',
  styleUrls: ['css/register.component.scss']
})
export class RegisterComponent {

  credentials: TokenPayload = {
    email: '',
    username: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) {}

  register( form: NgForm ) {

    this.credentials = {
      email: form.value.email,
      username: form.value.username,
      password: form.value.password
    }

    if ( confirm(`Are you sure you want to create the user ${this.credentials.username}?`) ) {

      this.auth.register(this.credentials).subscribe(
        () => {
          this.router.navigateByUrl('admin/user');
          alert('User created');
          form.reset();
        },
        err => {
          console.error(err);
        }
      );
    }
  }
}
