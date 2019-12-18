import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from '../../../authentication.service';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './adminHomePage.component.html',
  styleUrls: ['css/adminHomePage.component.scss']
})

export class AdminHomePageComponent {
  title = 'Admin home';
  details: UserDetails;

  constructor(private auth: AuthenticationService) {}

  // ngOnInit() {
  //   this.auth.profile().subscribe(user => {
  //     this.details = user;
  //   }, (err) => {
  //     console.error(err);
  //   });
  // }

}
