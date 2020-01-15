import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page-component',
  templateUrl: 'landing.component.html',
  styleUrls: ['./css/landing.component.scss']
})

export class LandingPageAppComponent implements OnInit {
  title = 'Landing page';

  ngOnInit() {}

}
