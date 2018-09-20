import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name = "Jhonathan";
  lastName = "Giraldo Chaura";
  uc = "upper case";
  lc = "LOWER CASE";
  slc = "SLICESLICE";
  slcArray = [1,2,3,4,5,6,7,8,9];
  number = Math.PI;
  percent = 0.32156;
  percent2 = 0.323257;
  salary = 119900.80;
  role = {
      name: "Agtum",
      lastName: "Emilian",
      power: 100,
      health: 100,
      inventary:{
        sword: {
          name: "FireSword",
          attack: 120
        },
        key: "Masmorra key"
      }
  };
  date = new Date();

  valuePromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('The Data Arrive'), 3500);
  });
}

/*
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from '../src/app/app.component';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

@NgModule({
 imports: [ BrowserModule ],
 declarations: [ AppComponent ],
 providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
 bootstrap: [ AppComponent ]
})
export class AppModule { }
 */
