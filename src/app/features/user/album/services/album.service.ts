import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Models
import { APIAlbums } from '../models/album-model';

// Services
import { GlobalService } from 'src/app/shared/services/global.service';

@Injectable() // service provided in Artist module
export class AlbumService {

  constructor(private globalService: GlobalService) { /*empty*/ }

  // get album info
  public getAlbum(albumId: string): Observable<APIAlbums> {
    const albumUrl: string = `albums/${ albumId }`;

    return this.globalService.getAlbumQuery(albumUrl).pipe(
      map((res: APIAlbums) => {
        if (!res) {
          throw new Error('Value expected!');
        } else {
          return res;
        }
      }),
      catchError((err) => {
        throw new Error(err.message);
      }));
  }
}
