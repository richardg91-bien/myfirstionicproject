import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceDetallPageRoutingModule } from './place-detall-routing.module';

import { PlaceDetallPage } from './place-detall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceDetallPageRoutingModule
  ],
  declarations: [PlaceDetallPage]
})
export class PlaceDetallPageModule {}
