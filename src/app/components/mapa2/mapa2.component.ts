import { Component, OnInit } from '@angular/core';
import { ServicesTsService } from 'src/app/services/services.ts.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa2',
  templateUrl: './mapa2.component.html',
  styleUrls: ['./mapa2.component.css']
})
export class Mapa2Component implements OnInit {
  geo: any;
  map: any;
  popup: any;
  lstMarkers: any[] = []
  latitude: number = 0;
  longitude: number = 0;
  position: any = { lat: -2.8865237, lng: -78.9920678 };
  localizacion: string = "";
  m = {}

  constructor(private serv: ServicesTsService) { }

  ngOnInit(): void {
    this.geo = this.serv.useLocation;
    this.map = L.map('map2').setView(this.geo, 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
    //console.log(this.geo);
    this.lstMarkers.push(L.marker(this.geo).addTo(this.map).bindPopup("Prueba 1").openPopup(),
                        L.marker([-2.8815202, -78.997984]).addTo(this.map).bindPopup("Prueba 2").openPopup(),
                        L.marker([-2.8974971, -79.0045779]).addTo(this.map).bindPopup("Prueba 3").openPopup(),
                        L.marker([this.position.lat, this.position.lng]).addTo(this.map).bindPopup("Prueba 4").openPopup(),
    )
  }
  ngAfterViewInit(): void{
    this.map.on('click', (ev: any) => {
      // get the coordinates
      if(this.m != undefined){
        this.map.removeLayer(this.m);
      }
      this.m = L.marker([ev.latlng.lat, ev.latlng.lng]).addTo(this.map).bindPopup(ev.latlng.lat+ " - " + ev.latlng.lng).openPopup();
      console.log(ev.latlng);
    })
  }

  agregar(){
    console.log(this.latitude);
    console.log(this.longitude);
    this.lstMarkers.push(L.marker([this.latitude, this.longitude]).addTo(this.map).bindPopup(this.localizacion).openPopup())
  }

}
