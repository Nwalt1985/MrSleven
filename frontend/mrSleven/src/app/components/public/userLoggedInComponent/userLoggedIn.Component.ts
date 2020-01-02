import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../authentication.service';
import { UserDetails } from '../../../app-interfaces';

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
