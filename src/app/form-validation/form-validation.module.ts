import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormValidationRoutingModule } from './form-validation-routing.module';
import { FormValidationComponent } from './form-validation.component';

@NgModule({
  declarations: [FormValidationComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormValidationRoutingModule
  ]
})
export class FormValidationModule { }
