import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-heroe-cards',
  templateUrl: './heroe-cards.component.html'
})
export class HeroeCardsComponent implements OnInit {

  @Input() heroe:any = null;
  @Input() idx:number = null;
  @Output() heroeEmitter:EventEmitter<number>;
  constructor(
    private router:Router
  ) {
    this.heroeEmitter = new EventEmitter();
  }

  ngOnInit() {}

  verHeroe() {
    this.router.navigate(['/heroe', this.idx]);
    //this.heroeEmitter.emit(this.idx);
  }

}
