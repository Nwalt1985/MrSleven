import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../authentication.service';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-user-visits-component',
  templateUrl: './userVisits.component.html',
  styleUrls: ['css/userVisits.component.scss']
})

export class AdminUserVisitsComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router) { }

  userVisits = [];
  uniqueVisits = [];
  totalCount = 0;
  uniqueCount = 0;

  ngOnInit() {
    this.auth.getVisits().subscribe( ( result ) => {
      for ( const obj in result ) {
        if ( result ) {
          this.userVisits.push(result[obj]);
          this.totalCount = this.userVisits.length;
        }
      }

      this.getUniqueVisits( this.userVisits );
    });
  }

  getUniqueVisits( visits: Array<any> ) {
    // Use Lodash to remove any objects with matching IP addresses
    this.uniqueVisits = _.uniqBy(visits, 'user_ip');

    this.uniqueCount = this.uniqueVisits.length;
  }
}
