import { Component, OnInit } from '@angular/core';
import { PageVisitService } from './landing.service';

@Component({
  selector: 'app-landing-page-component',
  templateUrl: 'landing.component.html',
  styleUrls: ['./css/landing.component.scss']
})

export class LandingPageAppComponent implements OnInit {
  title = 'Landing page';
  logo = [];

  constructor(public visit: PageVisitService ) {}

  ngOnInit() {
    this.visit.logVisit().subscribe((result: object) => {});

    // this.visit.getLogo().subscribe((result: object) => {
    //   for( const index in result ) {
    //     if ( result ) {
    //       this.logo.push( result[ index ]);
    //     }
    //   }
    //  });
  }

}
