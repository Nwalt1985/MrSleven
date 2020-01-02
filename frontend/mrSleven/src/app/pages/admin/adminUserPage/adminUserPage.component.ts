import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../authentication.service';
import { UserDetails } from '../../../app-interfaces';

@Component({
  selector: 'app-admin-user-page',
  templateUrl: './adminUserPage.component.html',
  styleUrls: ['css/adminUserPage.component.scss']
})

export class AdminUserPageComponent implements OnInit {
  title = 'Admin User Control';
  details: UserDetails;

  constructor(private auth: AuthenticationService) {}

  ngOnInit() {
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.error(err);
    });
  }

}
