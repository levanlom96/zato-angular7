import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { nameValidator, idValidator } from './validator';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {

  myForm: FormGroup;
  error = [];

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup(
      {
        'id': new FormControl(),
        'name': new FormControl(),
        'alterEgo': new FormControl(),
        'power': new FormControl()
      },
      { validators: [nameValidator, idValidator] }
    );
  }

  dawere() {
    console.log('validation: ', this.myForm.valid);
    console.log('errors: ', this.myForm.errors);
    this.error = [];
    this.error = this.myForm.errors && this.myForm.errors.idErrors ? this.myForm.errors.idErrors : [];
  }
}