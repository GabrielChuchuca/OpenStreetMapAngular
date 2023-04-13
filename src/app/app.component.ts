import { Component, Inject, Input, OnInit } from '@angular/core';
import { ServicesTsService } from './services/services.ts.service';
//import {icon, map, Map, Marker, marker, tileLayer} from 'leaflet'
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'h';
  geo: any;
  map: any;
  popup: any;
  lstMarkers: any[] = []
  latitude: number = 0;
  longitude: number = 0;
  position: any = { lat: -2.8865237, lng: -78.9920678 };
  localizacion: string = "";
  m = {}

  constructor(private serv: ServicesTsService) {
  }
 
  ngOnInit(): void {
    this.geo = this.serv.useLocation;
    this.map = L.map('map').setView(this.geo, 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
    //console.log(this.geo);
    /*this.lstMarkers.push(L.marker(this.geo).addTo(this.map).bindPopup("Prueba 1").openPopup(),
                        L.marker([-2.8815202, -78.997984]).addTo(this.map).bindPopup("Prueba 2").openPopup(),
                        L.marker([-2.8974971, -79.0045779]).addTo(this.map).bindPopup("Prueba 3").openPopup(),
                        L.marker([this.position.lat, this.position.lng]).addTo(this.map).bindPopup("Prueba 4").openPopup(),
    )*/
  }

  /*onMapClick(e: any): void{
    console.log(e.latlng.lat, e.latlng.lng);
    this.popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(this.map);
    //alert(e.latlng.lat + " + " + e.latlng.lng)
  }*/

  ngAfterViewInit(): void{
    this.map.on('click', (e: any) => {
      // get the coordinates
      if(this.m != undefined){
        this.map.removeLayer(this.m);
      }
      this.m = L.marker([e.latlng.lat, e.latlng.lng]).addTo(this.map).bindPopup(e.latlng.lat+ " - " + e.latlng.lng).openPopup();
      console.log(e.latlng);
    })
  }

  agregar(){
    console.log(this.latitude);
    console.log(this.longitude);
    this.lstMarkers.push(L.marker([this.latitude, this.longitude]).addTo(this.map).bindPopup(this.localizacion).openPopup())
  }
}