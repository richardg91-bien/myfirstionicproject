import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceDetallPage } from './place-detall.page';

const routes: Routes = [
  {
    path: '',
    component: PlaceDetallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceDetallPageRoutingModule {}
