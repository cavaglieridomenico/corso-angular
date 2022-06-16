import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, PatternValidator } from '@angular/forms';

@Component({
  selector: 'app-form-template-d-esercizio',
  templateUrl: './form-template-d-esercizio.component.html',
  styleUrls: ['./form-template-d-esercizio.component.css'],
})
export class FormTemplateDEsercizioComponent implements OnInit {
  @ViewChild('signUpForm') signUpForm: NgForm;
  tipoAbbonamentoDefault = 'gold';
  account = {
    emailAbbonamento: '',
    tipoAbbonamento: '',
    password: '',
  };
  submitted = false;

  constructor() {}

  ngOnInit(): void {
    console.log(this.signUpForm);
  }
  onSubmit(form: NgForm) {
    console.log(form);
    this.account.emailAbbonamento = this.signUpForm.value.emailAbbonamento;
    this.account.tipoAbbonamento = this.signUpForm.value.tipoAbbonamento;
    this.account.password = this.signUpForm.value.password;
    this.submitted = true;
    this.signUpForm.reset();
  }
  onSuggerisci() {
    this.signUpForm.form.patchValue({
      emailAbbonamento: 'cavaglieridomenico@gmail.com',
      password: '12345',
    });
  }
}
