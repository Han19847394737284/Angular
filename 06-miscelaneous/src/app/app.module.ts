import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {ROUTING} from './app.routes';
import { AppComponent } from './app.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
import { CssComponent } from './components/css/css.component';
import { ClassComponent } from './components/class/class.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { EditComponent } from './components/users/edit/edit.component';
import { NewComponent } from './components/users/new/new.component';
import { DeleteComponent } from './components/users/delete/delete.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NgstyleComponent,
    CssComponent,
    ClassComponent,
    HomeComponent,
    UsersComponent,
    EditComponent,
    NewComponent,
    DeleteComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
