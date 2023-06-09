import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaComponent } from './components/mapa/mapa.component';
import { AppComponent } from './app.component';
import { Mapa2Component } from './components/mapa2/mapa2.component';
import { GraficaComponent } from './components/grafica/grafica.component';

const routes: Routes = [
  { path: '', redirectTo: '/mapa', pathMatch: 'full' },
  { path: 'mapa', component: MapaComponent },
  { path: 'mapa2', component: Mapa2Component},
  { path: 'grafica', component: GraficaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
