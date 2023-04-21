import { Component, Inject, Input, OnInit } from '@angular/core';
import { ServicesTsService } from './services/services.ts.service';
//import {icon, map, Map, Marker, marker, tileLayer} from 'leaflet'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'h';
  

  constructor(private serv: ServicesTsService) {
  }
 
  ngOnInit(): void {
    
  }

  /*onMapClick(e: any): void{
    console.log(e.latlng.lat, e.latlng.lng);
    this.popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(this.map);
    //alert(e.latlng.lat + " + " + e.latlng.lng)
  }*/

  

  
}