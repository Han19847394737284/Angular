import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../service/spotify.service'

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  private artist: any = {};
  private topTrack: any = [];
  private show = false;

  constructor(
      private router: ActivatedRoute,
      private spotiService: SpotifyService
  ) {
    this.router.params.subscribe(params => {
      this.getArtist(params['id'])
      this.getTopTrack(params['id'])
    })
  }

  getArtist(id: string) {
    this.spotiService.getSearchArtistId(id)
      .subscribe(data => {
        console.log(data);
        this.artist = data;
        this.show = true;
      });
  }

  getTopTrack(id: string) {
    this.spotiService.getTopTracksArtist(id)
      .subscribe(data => {
        console.log(data);
        this.topTrack = data;
        this.show = true;
      }, (error) => {
        console.log("Esto es Un error");
        console.log(error);
      });
  }
}