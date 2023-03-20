import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'docs';
  dados: Array<{ id: number; name: string }> = [];

  constructor() {
    this.dados = [
      {
        id: 254,
        name: 'Jhon',
      },
      {
        id: 365,
        name: 'Wicky',
      },
      {
        id: 986,
        name: 'Senna',
      },
      {
        id:758,
        name:'August'
      }
    ];
  }
}
