import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'places',
    pathMatch: 'full'
  },
  {
    path: 'places',
    children: [
      {
        path:"",
        loadChildren: () => import('./places/places.module').then( m => m.PlacesPageModule)
      },
      {
        path:":placeId",
        loadChildren: () => import('./places/place-detall/place-detall.module').then(m => m.PlaceDetallPageModule)

      }
    ]
  },
  {
    path: 'new-place',
    loadChildren: () => import("./places/places-add/places-add.module").then(m => m.PlacesAddPageModule),

  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
