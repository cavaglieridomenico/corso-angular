import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  isOpen = false;
  open = '';
  constructor() {}

  ngOnInit(): void {}

  onChangeAside() {
    if (!this.isOpen) {
      this.open = 'open';
      this.isOpen = true;
    } else {
      this.open = '';
      this.isOpen = false;
    }
  }
}
