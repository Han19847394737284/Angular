import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  template: `
    <div [ngClass]="'alert-primary'" class="alert" role="alert">
      Una alerta simple
    </div>
    <div [ngClass]="alert" class="alert" role="alert">
      Una alerta construida con una variable
    </div>
  `,
  styles: []
})
export class ClassComponent implements OnInit {

  alert = 'alert-info';

  constructor() { }

  ngOnInit() {
  }

}
