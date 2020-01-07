import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../authentication.service';
import { UserDetails } from '../../../app-interfaces';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-navigation-component',
  templateUrl: './navigation.component.html',
  styleUrls: ['./css/navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class NavigationAppComponent implements OnInit {
  title = 'Navigation';
  details: UserDetails;

  navContent: Array<any> = [];

  constructor(public auth: AuthenticationService, public navService: NavigationService ) {}

  ngOnInit() {
    this.navService.getNavigationContent().subscribe((result: Array<any>) => {
      this.navContent = result;
    });
  }

}
