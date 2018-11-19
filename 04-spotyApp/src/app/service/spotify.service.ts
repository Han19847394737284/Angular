import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private token: string = 'Bearer BQBlQqcvuHys_MTI6khndwGigW6PK3aDVOJMf75rqrSjseidRh7ncl3efVI_GT48eamGDR1QctyxamaP_zY';
  constructor(private http: HttpClient) {
    console.log("Spotify Service is Ready");
  }

  getNewRelease(){
    const headers = new HttpHeaders({
      'Authorization': this.token
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .pipe(map((data: any) =>{
        return data.albums.items
      }));
  }

  getSearchArtist(param: string) {
    const headers = new HttpHeaders({
      'Authorization': this.token
    });

    return this.http.get('https://api.spotify.com/v1/search?q='+param+'&type=artist&limit=20', { headers })
      .pipe(map((data: any) =>{
        return data.artists.items
      }));
  }

  getSearchArtistId(param: string) {
    const headers = new HttpHeaders({
      'Authorization': this.token
    });

    return this.http.get('https://api.spotify.com/v1/artists/'+param, { headers });
  }

  getTopTracksArtist(param: string) {
    const headers = new HttpHeaders({
      'Authorization': this.token
    });

    return this.http.get('https://api.spotify.com/v1/artists/' + param + '/top-tracks?country=US', { headers })
      .pipe(map((data: any) =>{
        return data['tracks'];
      }));
  }
}
