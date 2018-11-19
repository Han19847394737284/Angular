import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {UsersComponent} from './components/users/users.component';
import {ROUTESUSERS} from './components/users/users.routes'

const ROUTES: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'users',
        component: UsersComponent,
        children: ROUTESUSERS
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];

export const ROUTING = RouterModule.forRoot(ROUTES);
