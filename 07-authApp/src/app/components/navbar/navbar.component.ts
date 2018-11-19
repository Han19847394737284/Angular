import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth0.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  constructor( private auth0 : AuthService ) {
    this.auth0.handleAuthentication();
  }

  login(){
    this.auth0.login();
  }

  logout(){
    this.auth0.logout();
  }

  isAuthenticate(){

  }

}
