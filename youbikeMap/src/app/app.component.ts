import { Component } from '@angular/core';
import { marker } from './map';
import { MapsService } from 'src/map.service';
import { COUNTY } from './county';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  // 區域
  countys = COUNTY;
  // 用空字符串初始化
  selectedCityCode: string = '';
  // markers 地標初始化
  markers: marker[] = [];
  // 定義 selectedAreaCode
  selectedAreaCode: any;

  // 定義型態與是否有抓到
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  onSelectionChange(event: any) {
    // 更新selectedAreaCode
    this.selectedAreaCode = event.target.value;
    console.log('Area code:', this.selectedAreaCode);
    this.getYouBikeData();
  }

  // 訂閱YouBike api
  constructor(private map: MapsService) {
    this.getYouBikeData();
  }

  // 定義getYouBikeData
  private getYouBikeData() {
    this.map.getData().subscribe((data: any) => {
      // markers 初始化
      this.markers = [];
      let retVal: any[] = data.retVal;
      retVal.forEach((x) => {
        let marker: marker = {
          label: x.name_tw,
          lat: x.lat,
          lng: x.lng,
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
        // if (this.markers.length <= 50) {
        //   this.markers.push(marker);
        // }
      });
      console.warn(this.markers);
    });
  }

  // constructor(private map: MapsService) {
  //   this.map.getData().subscribe((data: any) => {
  //     let retVal: any[] = data.retVal;
  //     retVal.forEach((x) => {
  //       let marker: marker = {
  //         // label: x.name_tw.replace(/YouBike2.0_/gi, ''), 刪除YouBike2.0 字眼
  //         label: x.name_tw,
  //         lat: x.lat,
  //         lng: x.lng,
  //         district_tw: x.district_tw,
  //         available_spaces_detail: x.available_spaces_detail,
  //         empty_spaces: x.empty_spaces,
  //         url: 'https://maps.google.com/maps?ll=' +
  //           x.lat +
  //           ',' +
  //           x.lng +
  //           '&amp;z=17&amp;t=m&amp;hl=zh-TW&amp;gl=TW&amp;mapclient=embed&amp;cid=5172986590304905081',
  //         draggable: true,
  //         updated_at: '',
  //         name_tw: '',
  //         address_tw: '',
  //         parking_spaces: 0
  //       };
  //       if (this.markers.length <= 20) {
  //         this.markers.push(marker);
  //       }
  //     });
  //     console.warn(this.markers);
  //   });
  // }


}
