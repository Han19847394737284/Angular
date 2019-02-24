import { NgModule } from '@angular/core';

import { AppPagesRoutingModule } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import {PagesComponent} from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import {FormsModule} from '@angular/forms';
import {IncrementatorComponent} from '../components/incrementator/incrementator.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { ObservablesComponent } from './observables/observables.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementatorComponent,
    AccountSettingsComponent,
    PromisesComponent,
    ObservablesComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  imports: [
    SharedModule,
    AppPagesRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }
