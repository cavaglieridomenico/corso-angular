import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-esercizio',
  templateUrl: './esercizio.component.html',
  styleUrls: ['./esercizio.component.css'],
})
export class EsercizioComponent implements OnInit {
  corsiForm: FormGroup;
  submitted = false;
  statoCorsoList = ['In corso', 'Da pianificare', 'Concluso'];
  patternCF =
    /^(?:[A-Z][AEIOU][AEIOUX]|[AEIOU]X{2}|[B-DF-HJ-NP-TV-Z]{2}[A-Z]){2}(?:[\dLMNP-V]{2}(?:[A-EHLMPR-T](?:[04LQ][1-9MNP-V]|[15MR][\dLMNP-V]|[26NS][0-8LMNP-U])|[DHPS][37PT][0L]|[ACELMRT][37PT][01LM]|[AC-EHLMPR-T][26NS][9V])|(?:[02468LNQSU][048LQU]|[13579MPRTV][26NS])B[26NS][9V])(?:[A-MZ][1-9MNP-V][\dLMNP-V]{2}|[A-M][0L](?:[1-9MNP-V][\dLMNP-V]|[0L][1-9MNP-V]))[A-Z]$/i;

  datiCorso = {
    nomeCorso: '',
    email: '',
    statoCorso: '',
    cap: '',
    codiceFiscale: '',
  };

  constructor() {}

  ngOnInit(): void {
    this.corsiForm = new FormGroup({
      nomeCorso: new FormControl(null, [
        Validators.required,
        CustomValidators.nomiProibiti,
      ]),
      email: new FormControl(
        null,
        [Validators.required, Validators.email],
        this.emailProibite
      ),
      statoCorso: new FormControl('In corso', [Validators.required]),
      cap: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
        Validators.pattern(/^\d+$/),
      ]),
      codiceFiscale: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.patternCF),
      ]),
    });
    /*Test stausChange and errors*/
    // this.corsiForm.get('email').statusChanges.subscribe((status) => {
    //   console.log(status);
    //   console.log(this.corsiForm.get('email').errors);
    //   console.log(this.corsiForm.get('email').errors['emailProibita']);
    // });
  }

  emailProibite(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'pippo@pippo.com') {
          resolve({ emailIsProibita: true });
        } else {
          resolve(null);
        }
      }, 3000);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.corsiForm);
    this.datiCorso.nomeCorso = this.corsiForm.get('nomeCorso').value;
    this.datiCorso.email = this.corsiForm.get('email').value;
    this.datiCorso.statoCorso = this.corsiForm.get('statoCorso').value;
    this.datiCorso.cap = this.corsiForm.get('cap').value;
    this.datiCorso.codiceFiscale = this.corsiForm.get('codiceFiscale').value;

    this.submitted = true;
    this.corsiForm.reset();
  }
}
