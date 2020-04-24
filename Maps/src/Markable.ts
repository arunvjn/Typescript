export interface Markable {
  location: {
    lat: number;
    lng: number;
  };
  makerContent(): string;
}
