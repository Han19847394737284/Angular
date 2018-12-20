import { Routes, RouterModule } from '@angular/router';

import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './login/register.component';
import {NonepagefoundComponent} from './shared/nonepagefound/nonepagefound.component';
import {ProgressComponent} from './pages/progress/progress.component';
import {Graficas1Component} from './pages/graficas1/graficas1.component';
import {PagesComponent} from './pages/pages.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: NonepagefoundComponent}
];


export const AppRoutingModule = RouterModule.forRoot( routes, { useHash: true } );
