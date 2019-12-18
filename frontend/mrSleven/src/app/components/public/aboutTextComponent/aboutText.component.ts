import { Component, OnInit } from '@angular/core';
import { AboutTextService } from './about-text.service';


@Component({
  selector: 'app-about-text-component',
  templateUrl: './about-text.component.html',
  styleUrls: ['./css/about.component.scss']
})

export class AboutTextComponent implements OnInit {
  title = 'About Text';

  aboutContent: any = '';

  /* Dependancy injection. This allows access to the about-text.service*/
  constructor( public aboutService: AboutTextService ) {}

  /* On component init call the service to fetch component content */
  ngOnInit() {
    this.aboutService.getAboutTextContent().subscribe(( result: object ) => {

      // Crate a new arry with result data
      this.aboutContent = result;

    });

  }

}
