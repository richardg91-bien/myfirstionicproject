import { Injectable } from '@angular/core';

import { Place } from "./place.model";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: Place[] =[
    {
      id: "1",
      title:"Eiffel Tower",
      imageURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tour_eiffel_at_sunrise_from_the_trocadero.jpg/1200px-Tour_eiffel_at_sunrise_from_the_trocadero.jpg",
      comments:["Awesomme places", "wondeful experie"]
    },


      {
      id: "2",
      title:"Statue of Liberty",
      imageURL:"https://www.ecured.cu/images/2/2d/EstatuaLibertad.jpeg",
      comments:["Awesomme places", "wondeful experience"]
    },

     {
      id: "3",
      title:"Awesome Place",
      imageURL:"https://www.ecured.cu/images/2/2d/EstatuaLibertad.jpeg",
      comments:[]
    },


  ]

  constructor() { }


getPlace (placeId: string) {
  return{
    ...this.places.find(place => {
    return place.id === placeId
  })
  }
}


getPlaces() {
  return [...this.places]
}


addPlace(title:string, imageURL:string) {
  this.places.push({
    title,
    imageURL,
    comments: [],
    id: this.places.length +1 + ""
  });
}


deletePlace (placeId: string) {
  this.places = this.places.filter(place => {
    return place.id !== placeId
  })
}



}
