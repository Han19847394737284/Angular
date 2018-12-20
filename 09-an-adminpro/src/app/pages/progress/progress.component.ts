import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  value: number = 30;
  history: string = "Progreso de Actividad";

  value2: number = 10;
  history2: string = "Progreso de Maldad";


  constructor() {

  }

  ngOnInit() {
  }

  /*changedValue (val) {
    if (this.percentage >= 0 && this.percentage <= 100) {
      this.percentage += val;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    }
  }*/

  changeProgressBar(event: number) {
    console.log('Percent: ', event);
    this.value = event;
  }

}
