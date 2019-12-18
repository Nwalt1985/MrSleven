import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from '../../../authentication.service';

@Component({
  selector: 'app-user-logged-in-component',
  templateUrl: './userLoggedIn.component.html',
  styleUrls: ['./css/userLoggedIn.component.scss']
})

export class UserLoggedInComponent implements OnInit {
  title = 'User Logged in';
  details: UserDetails;

  constructor(public auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.error(err);
    });
  }
}
