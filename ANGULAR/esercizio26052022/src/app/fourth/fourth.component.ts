import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css'],
})
export class FourthComponent implements OnInit {
  color1 = 'red';
  color2 = 'green';
  isColorChange = false;
  constructor() {}

  ngOnInit(): void {}

  onChangeColor() {
    if (!this.isColorChange) {
      this.color1 = 'green';
      this.color2 = 'red';
      this.isColorChange = true;
    } else {
      this.color1 = 'red';
      this.color2 = 'green';
      this.isColorChange = false;
    }
  }
}
