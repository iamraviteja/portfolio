import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { homeRouterModule } from './home.router';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    homeRouterModule,
    SharedModule
  ],
  declarations: [HeaderComponent, HomeComponent, LandingComponent, AboutComponent, ContactComponent, FooterComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
