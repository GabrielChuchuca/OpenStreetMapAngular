import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MapaComponent } from './components/mapa/mapa.component';
import { Mapa2Component } from './components/mapa2/mapa2.component';
import { GraficaComponent } from './components/grafica/grafica.component';

import * as CanvasJSAngularChart from '../assets/canvasjs-3.7.5/canvasjs.angular.component';
let CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    Mapa2Component,
    GraficaComponent,
    CanvasJSChart
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
