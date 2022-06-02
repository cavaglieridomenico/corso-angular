import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Output('booleanEvent') showHide = new EventEmitter<boolean>();
  constructor() {}
  showHideValue: boolean = false;
  ngOnInit(): void {}

  onShowHide() {
    if (!this.showHideValue) {
      this.showHideValue = true;
      this.showHide.emit(this.showHideValue);
    } else {
      this.showHideValue = false;
      this.showHide.emit(this.showHideValue);
    }
  }
}
