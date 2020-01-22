import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => { return m.HomeModule })
  },
  {
    path: 'listing',
    loadChildren: () => import('./listing/listing.module').then(m => m.ListingModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./form-validation/form-validation.module').then(m => m.FormValidationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
