import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APISearch } from 'src/app/features/user/search/models/search-model';
import { APIAlbums } from 'src/app/features/user/album/models/album-model';
import { APINewReleases, FormattedNewReleases } from 'src/app/features/user/home/models/new-releases-model';
import { APIArtist } from 'src/app/features/user/artist/models/artist-model';
import { APIArtistTracks } from 'src/app/features/user/artist/models/artist-top-track-model';
import { APIArtistAlbums } from 'src/app/features/user/artist/models/artist-albums';

@Injectable() // provide service in module
export class GlobalService {
  authToken = 'Bearer BQDtKihN-F4jktESDJc6gfnVm3_5_NsAiTgLkpgyC5jckPXDz6SsZiAIjB0RB7WUNam7Ch8B-7wxxyYsNy6mWcbXDR4wRUYfyLxU7SdP7AtBW_uZi2kn2OztNVkiGt4LW3L3qwYaDR_l-UBmJixdbyQOW4IL9eCeWvA';
   constructor(private http: HttpClient) { /*empty*/ }

  public getSearchQuery(query: string) {
    // define common url
    const url: string = `https://api.spotify.com/v1/${query}`;

    // define header to specify token
    const headers = new HttpHeaders({
      'Authorization': this.authToken
    });

    // execute request
    return this.http.get<APISearch[]>(url, { headers });
  }

  public getAlbumQuery(query: string) {
    // define common url
    const url: string = `https://api.spotify.com/v1/${query}`;

    // define header to specify token
    const headers = new HttpHeaders({
      'Authorization': this.authToken
    });

    // execute request
    return this.http.get<APIAlbums>(url, { headers });
  }

  public getNewReleaseQuery(query: string) {
    // define common url
    const url: string = `https://api.spotify.com/v1/${query}`;

    // define header to specify token
    const headers = new HttpHeaders({
      'Authorization': this.authToken
    });

    // execute request
    return this.http.get<APINewReleases>(url, { headers });
  }

  public getArtistQuery(query: string) {
    // define common url
    const url: string = `https://api.spotify.com/v1/${query}`;

    // define header to specify token
    const headers = new HttpHeaders({
      'Authorization': this.authToken
    });

    // execute request
    return this.http.get<APIArtist>(url, { headers });
  }

  public getArtistTrackQuery(query: string) {
    // define common url
    const url: string = `https://api.spotify.com/v1/${query}`;

    // define header to specify token
    const headers = new HttpHeaders({
      'Authorization': this.authToken
    });

    // execute request
    return this.http.get<APIArtistTracks[]>(url, { headers });
  }

  public getArtistAlbumQuery(query: string) {
    // define common url
    const url: string = `https://api.spotify.com/v1/${query}`;

    // define header to specify token
    const headers = new HttpHeaders({
      'Authorization': this.authToken
    });

    // execute request
    return this.http.get<APIArtistAlbums>(url, { headers });
  }
}
