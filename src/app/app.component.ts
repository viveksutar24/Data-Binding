import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';

  no: number = 0;

  constructor() {
    setInterval(() => {
      this.no++;
    }, 1000)
  }

}


