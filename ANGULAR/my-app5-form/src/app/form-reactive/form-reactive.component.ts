import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css'],
})
export class FormReactiveComponent implements OnInit {
  constructor() {}

  //Il mio form
  signupForm: FormGroup;

  genere = ['maschio', 'femmina', 'altro'];
  ngOnInit(): void {
    //Ecco come sarà fatto il mio form:
    this.signupForm = new FormGroup({
      //form annidato
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          CustomValidators.nomiProibiti,
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.emailProibite
        ),
      }),
      genere: new FormControl(this.genere[0], Validators.required),
    });

    //Status globale form
    this.signupForm.statusChanges.subscribe((status) => console.log(status));
    //Stato del singolo input
    this.signupForm
      .get('userData.username')
      .statusChanges.subscribe((status) => console.log(status));
  }

  //Custom validator (si inserisce nell'array dei validators dell'input)
  // usernameVietati = ['Pippo', 'Paperino'];
  // nomiProibiti(control: FormControl): { [s: string]: boolean } {
  //   if (this.usernameVietati.indexOf(control.value) !== -1) {
  //     return { nomeIsProibito: true };
  //   }
  //   return null;
  // }

  //Async validator (non entra nell'array dei validatori, ma deve essere passato come terzo argomento dell'input che richiede una proprietà asyncrona
  emailProibite(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'pippo@pippo.com') {
          resolve({ emailIsProibita: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
