import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { ListingRoutingModule } from './listing-routing.module';
import { ListingComponent } from './listing.component';

@NgModule({
  declarations: [ListingComponent],
  imports: [
    CommonModule,
    ListingRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ListingModule { }
