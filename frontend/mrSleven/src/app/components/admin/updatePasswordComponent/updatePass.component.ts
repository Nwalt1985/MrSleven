import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TokenPayloadUpdatePass } from '../../../app-interfaces';

@Component({
  selector: 'app-update-password-component',
  templateUrl: './updatePass.component.html',
  styleUrls: ['css/updatePass.component.scss']
})

export class UpdatePasswordComponent implements OnInit {

  adminUsers = [];

  passwordsMatch = false;

  user: TokenPayloadUpdatePass = {
    id: '',
    username: '',
    newPassword: ''
  };

  /* On component load fetch all admin users */
  ngOnInit() {
    this.auth.getAdminUsers().subscribe( result => this.adminUsers = result );
  }

  constructor(private auth: AuthenticationService, private router: Router) {}

  updatePassword( form: NgForm ) {

    const formValue = form.value.adminUser.split(',');
    this.user.id = formValue[0];
    this.user.username = formValue[1];

    if (form.value.newPassword === form.value.reTypePassword) {
      this.user.newPassword = form.value.newPassword;
    }

    if (confirm(`Are you sure you want to update the password for ${this.user.username}?`) ) {

      this.auth.updatePass(this.user).subscribe(
        () => {
          alert('User password updated.');
          form.reset();
        },
        err => {
          console.error(err);
        }
      );
    }
  }
}
