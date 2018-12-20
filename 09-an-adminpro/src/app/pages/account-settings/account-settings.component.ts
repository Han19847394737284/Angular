import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _docuemnt) { }

  ngOnInit() {
  }

  changeTheme(theme: string, link) {
    console.log("THEME");
    console.log(theme);
    console.log(link);
    this.checkLink(link);
    this._docuemnt.getElementById('theme').setAttribute('href', `assets/css/colors/${theme}.css`);
  }

  checkLink(link: any) {
    let selector = document.getElementsByClassName('working');
    console.log("LINK");
    console.log(selector);
    selector[0].classList.remove('working');
    link.classList.add('working');
  }

}
