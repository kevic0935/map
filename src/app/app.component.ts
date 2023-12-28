import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faList, faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons';
// marker type 定義
import { marker } from './map';
import { MapService } from './map.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FontAwesomeModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'mapfunction';
  // icon
  iconMap = faLocationDot;
  iconList = faList;
  // marker
  markers: marker[] = [];

  constructor(private map: MapService) {

  }
}
