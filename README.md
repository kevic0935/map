`
export interface marker {
  label?: string;
  url: string;
  draggable: boolean;

  updated_at: string; //最後更新時間
  name_tw: string; //站別 ex.捷運科技大樓站
  address_tw: string; //地址 ex.復興南路二段235號前
  lat: number;
  lng: number;
  district_tw?: string; //區域 ex.大安區
  district_en?: string; //區域 ex.Daan Dist
  available_spaces_detail: { //此區 剩餘車
    yb1: number; //1.0
    yb2: number; //2.0
  };
  empty_spaces: number; //此區 空車位
  parking_spaces: number; //此區 最多車位
}
`
