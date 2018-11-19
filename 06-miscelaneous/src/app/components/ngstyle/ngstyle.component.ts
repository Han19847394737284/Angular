import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  template: `
    <p style="font-size: 20px">
      Esto es una Etiqueta que trabaja con stilos normales
    </p>
    <p [ngStyle]="{'font-size': '20px'}">
      Esto es una Etiqueta que trabaja con stilos de ngStyle
    </p>
    <p [style.fontSize.px]="size">
      Esto es una Etiqueta que trabaja con stilos de ngStyle con parametros de punto en la directiva
    </p>
  `,
  styles: []
})
export class NgstyleComponent implements OnInit {

  constructor() { }

  size = 20

  ngOnInit() {
  }

}
