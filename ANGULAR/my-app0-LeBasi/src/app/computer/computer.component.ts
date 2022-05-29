import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css'],
})
export class ComputerComponent implements OnInit {
  computerID = 2;
  computerStatus;

  computerCreated = true;
  constructor() {
    this.computerStatus = Math.random() > 0.5 ? 'OnLine' : 'OffLine';
  }

  ngOnInit(): void {}

  getColor() {
    return this.computerStatus === 'OnLine' ? 'lightgreen' : 'orange';
  }

  getComputerStatus() {
    return this.computerStatus;
  }
}
