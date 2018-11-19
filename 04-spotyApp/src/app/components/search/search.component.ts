import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  private artists: any;
  constructor(private spotify: SpotifyService) { }

  buscar(param: string) {
    console.log(param);
    this.spotify.getSearchArtist(param)
      .subscribe((data: any) =>{
        console.log(data);
        this.artists = data;
      });
  }
}
