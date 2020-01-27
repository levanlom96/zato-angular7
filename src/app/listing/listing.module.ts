import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { ListingRoutingModule } from './listing-routing.module';
import { ListingComponent } from './listing.component';

import { ClientService } from './Services/client.service';

@NgModule({
  declarations: [ListingComponent],
  providers: [ClientService],
  imports: [
    CommonModule,
    ListingRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ListingModule { }
