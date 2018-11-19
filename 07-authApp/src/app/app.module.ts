import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PricesComponent } from './components/prices/prices.component';
import { ProtectedComponent } from './components/protected/protected.component';
import {ROUTING} from './app.routes'
import { AuthService } from './services/auth0.service';
import {GuardService} from './services/guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PricesComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    ROUTING
  ],
  providers: [
    AuthService,
    GuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
