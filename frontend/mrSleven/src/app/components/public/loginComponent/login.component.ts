import { Component } from '@angular/core';
import { AuthenticationService } from '../../../authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TokenPayload } from '../../../app-interfaces';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./css/login.component.scss']
})
export class LoginAppComponent {

  credentials: TokenPayload = {
    email: '',
    username: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) {}

  login( form: NgForm ) {

    this.credentials = {
      email: form.value.email,
      username: form.value.email,
      password: form.value.password
    };

    this.auth.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/admin/home');
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
