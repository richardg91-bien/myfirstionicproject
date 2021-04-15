import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

const routes: Routes = [
  {
    path: '',
    component: PlacesPage
  },
  {
    path: 'place-detall',
    loadChildren: () => import('./place-detall/place-detall.module').then( m => m.PlaceDetallPageModule)
  },
  {
    path: 'places-add',
    loadChildren: () => import('./places-add/places-add.module').then( m => m.PlacesAddPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
