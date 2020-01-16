import { Component } from '@angular/core';
import { AuthenticationService } from '../../../authentication.service';

@Component({
  selector: 'app-admin-gallery-page-component',
  templateUrl: 'adminGalleryPage.component.html',
  styleUrls: ['css/adminGalleryPage.component.scss']
})

export class AdminGalleryPageComponent {

  title = 'Gallery Image Instructions';

  constructor(private auth: AuthenticationService) { }

}
