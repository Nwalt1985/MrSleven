import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayloadUser } from '../../../authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-delete-component',
  templateUrl: './delete.component.html',
  styleUrls: ['css/delete.component.scss']
})

export class DeleteUserComponent implements OnInit {

  adminUsers = [];

  credentials: TokenPayloadUser = {
    id: '',
    username: '',
  };

  /* On component load fetch all admin users */
  ngOnInit() {
    this.auth.getAdminUsers().subscribe( result => this.adminUsers = result );
  }

  constructor(private auth: AuthenticationService, private router: Router) {}

  delete( form: NgForm ) {

    const formValue = form.value.adminUser.split(',');
    this.credentials.id = formValue[0];
    this.credentials.username = formValue[1];

    if (confirm(`Are you sure you want to delete the user ${this.credentials.username}?`) ) {

      this.auth.delete(this.credentials).subscribe(
        () => {
          alert('User deleted.');
          form.reset();
        },
        err => {
          console.error(err);
        }
      );
    }
  }
}
