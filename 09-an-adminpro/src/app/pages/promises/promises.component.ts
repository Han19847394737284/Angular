import { Component, OnInit } from '@angular/core';
import {promise} from 'selenium-webdriver';
import {reject} from 'q';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {
      let p = new Promise((resolve, reject) => {
          let cont = 0;
          setInterval( () => {
              if (cont >= 5) {
                  console.log('Resuelto');
                  resolve();
              } else {
                  console.log('Sin resolver');
                  reject();
              }
              cont = cont + 1;
              console.log('Sumando');
              console.log(cont);
          }, 1000 );
      });

      p.then( () => {
          console.log('Terminó');
      }).catch( (error) => {
          console.log('Hubo error');
          console.log(error);
      });
  }

  ngOnInit() {
  }

}
