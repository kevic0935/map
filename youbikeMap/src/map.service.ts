import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapsService {
  constructor(private http: HttpClient) {}

  // 抓取YouBike2.0 api
  getData() {
    let url ='https://apis.youbike.com.tw/api/front/station/all?lang=tw&type=2';
    return this.http.get(url);
  }
}
