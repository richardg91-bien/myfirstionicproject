import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router  } from "@angular/router";
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import {AlertController  } from "@ionic/angular";


@Component({
  selector: 'app-place-detall',
  templateUrl: './place-detall.page.html',
  styleUrls: ['./place-detall.page.scss'],
})
export class PlaceDetallPage implements OnInit {


  place: Place

  constructor(private activatedRoute: ActivatedRoute, private placesService: PlacesService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(paramMap => {
      // redirect
      const recipeId= paramMap.get('placeId')
      this.place = this.placesService.getPlace(recipeId);

    })
  }

  async deletePlace() {

    const alertElement = await this.alertCtrl.create({
      header: 'Are your sure, tou want to delete it?',
      message: 'Be careful',
      buttons: [
        {
          text: 'cancel',
          role: 'cancel'

        },
        {
          text: 'Delete',
          handler: () => {
            this.placesService.deletePlace(this.place.id);
            this.router.navigate(['/places']);



          }
        }
      ]


    });


await alertElement.present();

  }


}
