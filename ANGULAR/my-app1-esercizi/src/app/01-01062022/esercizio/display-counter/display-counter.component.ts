import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-counter',
  templateUrl: './display-counter.component.html',
  styleUrls: ['./display-counter.component.css'],
})
export class DisplayCounterComponent implements OnInit {
  @Input() countList: string[];
  constructor() {}

  ngOnInit(): void {}
}
