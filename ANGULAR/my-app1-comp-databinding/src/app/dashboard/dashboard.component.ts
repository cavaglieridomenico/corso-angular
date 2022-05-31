import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


@Input() messageToUser: string;
//Output con Alias
@Output("lezTeoCr") lezioneCreataTeo = new EventEmitter<{nomeLezione: string, contenutoLezione: string}>();

@Output("lezFroCr") lezioneCreataFront = new EventEmitter<{nomeLezione: string, contenutoLezione: string}>();

  newNomeLezione = "";
  newDescLezione = "";


  constructor() { }

  ngOnInit(): void {
  }

    onAddTeorica() {
      this.lezioneCreataTeo.emit({
        nomeLezione: this.newNomeLezione,
        contenutoLezione: this.newDescLezione
      })
    }
    onAddFrontale() {
      this.lezioneCreataFront.emit({
        nomeLezione: this.newNomeLezione,
        contenutoLezione: this.newDescLezione
      })
    }

}
