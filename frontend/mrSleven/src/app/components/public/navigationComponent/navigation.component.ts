import { Component, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../../../authentication.service';
import { UserDetails } from '../../../app-interfaces';

@Component({
  selector: 'app-navigation-component',
  templateUrl: './navigation.component.html',
  styleUrls: ['./css/navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class NavigationAppComponent {
  title = 'Navigation';
  details: UserDetails;

  constructor(public auth: AuthenticationService) {}

}
