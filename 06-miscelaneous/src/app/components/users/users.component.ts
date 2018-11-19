import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  template: `
    <div>
      <div class="col-md-12 text-center">
        <div class="btn-group" role="group" aria-label="Basic Example">
          <button type="button" class="btn btn-secondary" [routerLink]="['new']">
            Nuevo
          </button>
          <button type="button" class="btn btn-secondary" [routerLink]="['edit']">
            Editar
          </button>
          <button type="button" class="btn btn-secondary" [routerLink]="['delete']">
            Detalle
          </button>
        </div>w
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
