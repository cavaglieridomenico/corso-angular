import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-esercizio',
  templateUrl: './esercizio.component.html',
  styleUrls: ['./esercizio.component.css'],
})
export class EsercizioComponent implements OnInit {
  corsiForm: FormGroup;
  submitted = false;
  printData = {
    nomeCorso: '',
    email: '',
    statoCorso: '',
    cap: '',
  };

  constructor() {}

  ngOnInit(): void {
    this.corsiForm = new FormGroup({
      nomeCorso: new FormControl(null, [
        Validators.required,
        CustomValidators.nomiProibiti,
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      statoCorso: new FormControl('In corso', [Validators.required]),
      cap: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }
  onSubmit() {
    console.log(this.corsiForm);
    this.submitted = true;
  }
  // this.nomeX = this.signupForm.get('username').value;
}
