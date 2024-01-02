import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YouBikeService {
  private apiUrl = 'https://apis.youbike.com.tw/api/front/station/all?lang=tw&type=2';

  constructor(private http: HttpClient) { }

  getYouBikeData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
