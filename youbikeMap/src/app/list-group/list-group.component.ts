import { Component } from '@angular/core';
import { COUNTY } from '../county';
import { marker } from '../map';
import { MapsService } from 'src/map.service';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.sass']
})
export class ListGroupComponent {

  // 區域
  countys = COUNTY;
  // 用空字符串初始化
  selectedCityCode: string = '';
  // markers 地標初始化
  markers: marker[] = [];
  // 定義 selectedAreaCode
  selectedAreaCode: any;

  // 訂閱YouBike api
  constructor(private map: MapsService) {
    this.getYouBikeData();
  }

  onSelectionChange(event: any) {
    // 更新selectedAreaCode
    this.selectedAreaCode = event.target.value;
    console.log('Area code:', this.selectedAreaCode);
    this.getYouBikeData();
  }

  // 定義getYouBikeData
  protected getYouBikeData() {
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


}
