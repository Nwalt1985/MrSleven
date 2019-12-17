import { Component, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-navigation-component',
  templateUrl: './navigation.component.html',
  styleUrls: ['./css/navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class NavigationAppComponent {
  title = 'Navigation';


  constructor(public auth: AuthenticationService) {}


}
