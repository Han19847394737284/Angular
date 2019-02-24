import { Routes, RouterModule } from '@angular/router';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {PromisesComponent} from './promises/promises.component';
import {ObservablesComponent} from './observables/observables.component';

const pagesroutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'progress', component: ProgressComponent},
      {path: 'graficas1', component: Graficas1Component},
      {path: 'account_settings', component: AccountSettingsComponent},
      {path: 'promises', component: PromisesComponent},
      {path: 'observable', component: ObservablesComponent},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  }
];

export const AppPagesRoutingModule = RouterModule.forChild( pagesroutes);
