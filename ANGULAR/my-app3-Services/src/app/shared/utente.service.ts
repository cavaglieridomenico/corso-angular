import { Injectable } from '@angular/core';
import { LogService } from '../log.service';

@Injectable({
  providedIn: 'root',
})
export class UtenteService {
  //Service nel service!!!
  constructor(private logService: LogService) {}
  scriviDalServiceUtente(frase: string) {
    this.logService.scriviInConsole(frase);
  }
}
