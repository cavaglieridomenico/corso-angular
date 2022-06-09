import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-aap2-customDirective';
  numbers: number[] = [1, 2, 3, 4, 5, 6];
  soloPari: boolean = true;
  value: number = 6;
}
