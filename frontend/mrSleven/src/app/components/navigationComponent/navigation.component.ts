import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navigation-component',
  templateUrl: './navigation.component.html',
  styleUrls: ['./css/navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class NavigationAppComponent {
  title = 'Navigation';
  backdropClass = 'dropdown-menu';
}
