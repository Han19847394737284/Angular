import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PricesComponent } from './components/prices/prices.component';
import { ProtectedComponent } from './components/protected/protected.component';
import {GuardService} from './services/guard.service';

const ROUTES: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'prices',
        component: PricesComponent
    },
    {
        path: 'protected',
        component: ProtectedComponent,
        canActivate: [GuardService]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];

export const ROUTING = RouterModule.forRoot(ROUTES);
