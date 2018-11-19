import { Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';

export const ROUTESUSERS: Routes = [
    {
        path: 'delete',
        component: DeleteComponent
    },
    {
        path: 'new',
        component: NewComponent,
    },
    {
        path: 'edit',
        component: EditComponent,
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'new'
    }
];
