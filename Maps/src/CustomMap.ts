import { Markable } from './Markable';

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 1,
    });
  }

  addMarker(markable: Markable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: markable.location,
    });
    marker.addListener(
      'click',
      function () {
        const infoWindow = new google.maps.InfoWindow({
          content: markable.makerContent(),
        });
        infoWindow.open(this.googleMap, marker);
      }.bind(this)
    );
  }
}
