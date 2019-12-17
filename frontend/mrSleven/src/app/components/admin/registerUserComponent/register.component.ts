import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../../../authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


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
      username: form.value.email,
      password: form.value.password
    }

    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('admin/home');
      },
      err => {
        console.error(err);
      }
    );
  }
}
