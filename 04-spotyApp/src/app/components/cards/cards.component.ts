import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  @Input() items: any[];

  constructor(private router: Router) { }

  goPageArtist(item) {
    let artistId: string = '';

    if (item.type === 'artist') {
      //item.id
      artistId = item.id;
    }
    if (item.type === 'album') {
      //item.artists.
      artistId = item.artists[0].id;
    }

    console.log('Buscando pagina');
    console.log(item);
    console.log(artistId);
    
    this.router.navigate(['/artist', artistId]);
  }
}
