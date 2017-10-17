import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const appRoutes:Routes = [
    {path:'', loadChildren:'./home/home.module#HomeModule'}
];

export const appRoutingModule = RouterModule.forRoot(appRoutes);