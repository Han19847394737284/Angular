import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent{

  releases: any[] = [];

  constructor(private spotify: SpotifyService) {
    console.log("Home controller Ready");
    this.spotify.getNewRelease()
      .subscribe((data: any) => {
        console.log(data);
        this.releases = data;
      });
  }
}
