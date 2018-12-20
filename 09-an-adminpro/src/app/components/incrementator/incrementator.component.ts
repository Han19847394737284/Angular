import {Component, Input, Output, OnInit} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-incrementator',
  templateUrl: './incrementator.component.html',
  styleUrls: ['./incrementator.component.css']
})
export class IncrementatorComponent implements OnInit {

  @Input('value') percentage: number = 50;
  @Input() history: string = 'Nueva Barra';

  @Output() emitChangeVal: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  changeValue (val) {
    if (this.percentage >= 0 && this.percentage <= 100) {
      this.percentage += val;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
      if (this.percentage > 100) {
        this.percentage = 100;
      }
      console.log('Emitiendo: ' + this.percentage);
      this.emitChangeVal.emit(this.percentage);
    }
  }

  onChangeValor(event: number) {
    console.log('Recibiendo valores ', event);
    this.emitChangeVal.emit(event);
  }

}
