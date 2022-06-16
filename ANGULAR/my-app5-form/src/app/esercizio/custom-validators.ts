import { FormControl } from '@angular/forms';
export class CustomValidators {
  //Custom validator (si inserisce nell'array dei validators dell'input)
  static nomiProibiti(control: FormControl): { [s: string]: boolean } {
    let usernameVietati = ['Test', 'test'];
    if (usernameVietati.indexOf(control.value) !== -1) {
      return { nomeIsProibito: true };
    }
    return null;
  }
}
