import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() interval = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
  setIntervalValue: any;
  counter: number = 0;
  onInterval() {
    this.setIntervalValue = setInterval(
      () => this.interval.emit(++this.counter),
      1000
    );
  }
  onStopInterval() {
    clearInterval(this.setIntervalValue);
    this.interval.emit(NaN);
  }
}
