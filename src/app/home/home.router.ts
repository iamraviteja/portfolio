import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const homeRoutes:Routes = [
    {path:'', component:HomeComponent, children:[
        {path:'', component:LandingComponent},
        {path:'about', component:AboutComponent},
        {path:'contact', component:ContactComponent}
    ]}
];

export const homeRouterModule = RouterModule.forChild(homeRoutes);