import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import { MapsService } from 'src/map.service';
import { marker } from '../map';

@Component({
  selector: 'app-map-group',
  templateUrl: './map-group.component.html',
  styleUrls: ['./map-group.component.sass']
})

export class MapGroupComponent implements OnInit {

  // markers 地標初始化
  markers: marker[] = [];

  // 訂閱YouBike api
  constructor(private map: MapsService) {}

  ngOnInit(): void {
    // Leaflet 初始化
    const map: L.Map = L.map('map').setView([25.0475613, 121.5173399], 13);
    // 增加Leaflet 圖層
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // 抓api
    this.map.getData().subscribe((data: any) => {
      this.markers = [];
      const retVal: any[] = data.retVal.slice(0, 30);

      const markerArray: L.Marker[] = [];

      retVal.forEach((x) => {
        const lat: number = Number(x.lat);
        const lng: number = Number(x.lng);

        if (!isNaN(lat) && !isNaN(lng)) {
          const marker: marker = {
            label: x.name_tw,
            lat: lat,
            lng: lng,
            area_code: x.area_code,
            district_tw: x.district_tw,
            available_spaces_detail: x.available_spaces_detail,
            empty_spaces: x.empty_spaces,
            url: 'https://maps.google.com/maps?ll=' +
              x.lat +
              ',' +
              x.lng +
              '&amp;z=17&amp;t=m&amp;hl=zh-TW&amp;gl=TW&amp;mapclient=embed&amp;cid=5172986590304905081',
            draggable: true,
            updated_at: '',
            name_tw: '',
            address_tw: '',
            parking_spaces: 0
          };

          this.markers.push(marker);

          const markerLeaflet: L.Marker = L.marker([lat, lng]).addTo(map);
          markerLeaflet.bindPopup(`
            ${x.name_tw}站<br>剩餘車輛：${x.available_spaces_detail.yb2}<br>
            更新時間：${x.updated_at}
            `);
          markerArray.push(markerLeaflet);
        } else {
          console.error(`Invalid coordinates: ${x.lat}, ${x.lng}`);
        }
      });

      if (markerArray.length > 0) {
        const group: L.FeatureGroup = L.featureGroup(markerArray);
        map.fitBounds(group.getBounds());
      }
    });
  }
}
