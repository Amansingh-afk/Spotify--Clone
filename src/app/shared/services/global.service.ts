import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APISearch } from 'src/app/features/user/search/models/search-model';
import { APIAlbums } from 'src/app/features/user/album/models/album-model';
import { APINewReleases, FormattedNewReleases } from 'src/app/features/user/home/models/new-releases-model';

@Injectable() // provide service in module
export class GlobalService {
  authToken = 'Bearer BQAvbZWeYwXyICPlYa2bI19k3q6UJzSz4vy3XG9oakichnfH7RwR8tPjRrGrAhpzyjEuoKG3JxdaABX-ThqTywdtoRDmAlx6Ys9txSMjeCVVmkGx4AMvfJvan4-CkRcRFR8IGQxMzDbvde-uhFPzTWyjMKPUsHZzMm4';
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
}
