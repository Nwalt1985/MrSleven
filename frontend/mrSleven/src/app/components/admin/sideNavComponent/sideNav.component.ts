import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav-component',
  templateUrl: 'sideNav.component.html',
  styleUrls: ['css/sideNav.component.scss']
})

export class SideNavigationComponent {
  events: string[] = [];
  opened: boolean;
}
