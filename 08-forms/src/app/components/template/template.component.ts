import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent {

  constructor() { }

  user: Object = {
    name: null,
    lastName: null,
    email: null
  }

  save(form: NgForm) {
    console.log('Formulario Enviado');
    console.log(form);
    console.log(form.value);
    console.log(this.user);
  }
}
