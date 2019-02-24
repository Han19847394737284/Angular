import {Component, Inject, OnInit} from '@angular/core';
//import {DOCUMENT} from '@angular/platform-browser';
import {SettingsService} from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(/*@Inject(DOCUMENT) private _document,*/ public _ajustes: SettingsService) { }

  ngOnInit() {
  }

  changeTheme(theme: string, link) {
    //console.log('THEME');
    //console.log(theme);
    //console.log(link);
    //this.checkLink(link);
    // this._document.getElementById('theme').setAttribute('href', `assets/css/colors/${theme}.css`);
    //this._ajustes.ajustes.themeUrl = link;
    //this._ajustes.ajustes.theme = theme;
    this._ajustes.setSettings(theme, link);

  }

  /*checkLink(link: any) {
    const selector = document.getElementsByClassName('working');
    console.log('LINK');
    console.log(selector);
    selector[0].classList.remove('working');
    link.classList.add('working');
  }*/

}
