import { Component } from '@angular/core';
import { AuthenticationService } from '../../../authentication.service';

@Component({
  selector: 'app-admin-about-component',
  templateUrl: './adminAbout.component.html',
  styleUrls: ['css/adminAbout.component.scss']
})

export class AdminAboutComponent {

  constructor(private auth: AuthenticationService) { }

}
