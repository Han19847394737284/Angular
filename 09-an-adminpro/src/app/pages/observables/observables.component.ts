import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {map, retry} from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styles: []
})
export class ObservablesComponent implements OnInit {

  constructor( ) {
    let cont = 0;

    const obs = new Observable((observer) => {
      const interval = setInterval(() => {
        cont = cont + 1;
        observer.next(cont);

        if (cont === 3) {
          observer.complete();
        }
      });
    }, 1000);

    obs.pipe(
      retry(2)
    );
    obs.pipe(
      map(r => {
        return r;
      })
    );
    obs.subscribe( n => {
      console.log('Subcribe a Number', n);
    }, error1 => {
      console.log('Hubo un error');
    }, () => {
      console.log('EL observador terminó');
    });
  }

  ngOnInit() {
  }

}
