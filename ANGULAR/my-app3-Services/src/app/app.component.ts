import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-app3-Services';

  //Dependency Injection
  constructor(private mioService: LogService) {
    mioService.scriviInConsole('nel costruttore');
  }
  ngOnInit(): void {
    this.mioService.scriviInConsole('nel OnInit');
  }

  modUserType() {
    this.mioService.aggiornaTipo(2, 'Genitore');
  }
}
