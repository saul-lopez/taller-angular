import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TareasComponent } from './tareas/tareas.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'tareas',
        component: TareasComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

