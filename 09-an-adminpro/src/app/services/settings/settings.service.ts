import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

export class SettingsService {

  ajustes: Ajustes = {
    // themeUrl: 'assets/css/colors/default-dark.css',
    theme: 'default',
    link: 'default'
  }

  constructor(@Inject(DOCUMENT) private _document) {
    this.loadSettings();
  }

  saveSettings() {
    console.log('Guardando ajustes');
    console.log(this.ajustes);
    localStorage.setItem('Ajustes', JSON.stringify(this.ajustes));
  }

  loadSettings() {
    console.log('Cargando los Ajustes');
    if (localStorage.getItem('Ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('Ajustes'));
      console.log('Ajustes Cargados ');
      console.log(this.ajustes);
      this._document.getElementById('theme').setAttribute('href', `assets/css/colors/${this.ajustes.theme}.css`);
    } else {
      console.log('Sin AJustes');
    }
  }

  setSettings(theme: String, link: any) {
    console.log('Aplicando: ' + theme);
    this._document.getElementById('theme').setAttribute('href', `assets/css/colors/${theme}.css`);
    this.ajustes.link = link;
    this.ajustes.theme = theme;
    console.log(link);
    const selector = document.getElementsByClassName('working');
    if(selector.length > 0) {
      selector[0].classList.remove('working');
    }
    link.classList.add('working');
    this.saveSettings();
  }
}

interface Ajustes {
  // themeUrl: String;
  theme: String;
  link: any;
}
