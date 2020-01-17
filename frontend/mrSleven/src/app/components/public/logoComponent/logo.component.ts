import { Component, OnInit } from '@angular/core';
import { LogoService } from './logo.service';

@Component({
  selector: 'app-logo-component',
  templateUrl: 'logo.component.html',
  styleUrls: [ 'css/logo.component.scss' ]
})

export class LogoComponent implements OnInit {

  constructor( public logoService: LogoService ) {}

  logo = [];

  ngOnInit() {
    this.logoService.getLogo().subscribe((result: object) => {

      for ( const index in result ) {
        if ( result ) {
          this.logo.push( result[ index ] );
        }
      }
    });
  }
}
