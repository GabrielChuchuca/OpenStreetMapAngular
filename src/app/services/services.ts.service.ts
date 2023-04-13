import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesTsService {
  public useLocation?: [number, number];

  constructor() { 
    this.getUserLocation();
  }

  getUserLocation(){
    this.useLocation = [-2.8921828, -79.0305796]
  }
}
