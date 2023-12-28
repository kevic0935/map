import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  // https://apis.youbike.com.tw/api/front/station/all?lang=tw&type=2
  constructor(private http: HttpClient) {}
  getData() {
    let apiUrl = 'https://apis.youbike.com.tw/api/front/station/all?lang=tw&type=2';
    return this.http.get(apiUrl);
  }
}
