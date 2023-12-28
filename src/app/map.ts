// marker type 定義
export interface marker {
  label?: string;
  lat: number;
  lng: number;
  district_tw?: string;
  available_spaces_detail: {
    yb1: number;
    yb2: number;
  };
  empty_spaces: number;
  url: string;
  draggable: boolean;
}
