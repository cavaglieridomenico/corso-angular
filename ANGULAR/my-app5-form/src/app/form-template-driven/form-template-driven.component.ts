import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-template-driven',
  templateUrl: './form-template-driven.component.html',
  styleUrls: ['./form-template-driven.component.css'],
})
export class FormTemplateDrivenComponent implements OnInit {
  @ViewChild('mioForm') formReg: NgForm;
  risposta: string;
  domandaDefault = 'animale';

  genere = ['femmina', 'maschio', 'altro'];

  user = {
    username: '',
    email: '',
    secret: '',
    rispostaSecret: '',
    genere: '',
  };
  submitted = false;
  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form);
    this.user.username = this.formReg.value.userData.username;
    this.user.email = this.formReg.value.userData.email;
    this.user.secret = this.formReg.value.secret;
    this.user.rispostaSecret = this.formReg.value.rispostaSecret;
    this.user.genere = this.formReg.value.genere;
    this.submitted = true;

    this.formReg.reset();
  }

  onSuggerisciName() {
    const nomeSuggerito = 'Ugo';
    // this.formReg.setValue({
    //   userData: {
    //     username: nomeSuggerito,
    //     email: '',
    //   },
    //   secret: '',
    //   rispostaSecret: '',
    //   genere: 'maschio',
    // });
    this.formReg.form.patchValue({
      userData: {
        username: nomeSuggerito,
      },
      genere: 'maschio',
    });
  }
}
