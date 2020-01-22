import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {

  myForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup(
      {
        'name': new FormControl(),
        'alterEgo': new FormControl(),
        'power': new FormControl()
      },
      { validators: nameValidator }
    );
  }

  dawere() {
    console.log('validation: ', this.myForm.valid);
    console.log('errors: ', this.myForm.errors);
  }
}

const nameValidator: ValidatorFn = (form: FormGroup) => {
  const name = form.get('name');
  const alterEgo = form.get('alterEgo');
  return name && alterEgo && name.value === alterEgo.value ? {} : null;
}
