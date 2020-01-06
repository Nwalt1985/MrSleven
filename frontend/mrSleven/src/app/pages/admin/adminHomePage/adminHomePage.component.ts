import { Component } from '@angular/core';
import { AuthenticationService } from '../../../authentication.service';
import { UserDetails } from '../../../app-interfaces';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './adminHomePage.component.html',
  styleUrls: ['css/adminHomePage.component.scss']
})

export class AdminHomePageComponent {
  title = 'Admin home';
  details: UserDetails;

  constructor(private auth: AuthenticationService) {}

}
