import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>
      Demos
    </h1>
    <hr>
    <h2>
      Ejemplo 1
    </h2>
    <app-ngstyle></app-ngstyle>
    <hr>
    <h2>
      Ejemplo 2
    </h2>
    <app-css></app-css>
    <h2>
      Ejemplo 3
    </h2>
    <app-class></app-class>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
