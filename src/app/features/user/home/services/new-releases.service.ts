import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Models
import { FormattedNewReleases, APINewReleases } from '../models/new-releases-model';

// Services
import { GlobalService } from 'src/app/shared/services/global.service';

@Injectable() // service provided in module
export class NewReleasesService {
  private newReleasesUrl: string = 'browse/new-releases';

  constructor(private globalService: GlobalService) { /*empty*/ }

  public getNewReleases(): Observable<FormattedNewReleases[]> {
    return this.globalService.getNewReleaseQuery(this.newReleasesUrl).pipe(
      map((res: APINewReleases) => {
        if (!res) {
          throw new Error('Value expected!');
        } else {
          const formattedItems: FormattedNewReleases[] = res.albums.items.map((
            { id, images, name, artists, type }) => (
            { id, images, name, artists, type }
            ));
          return formattedItems;
        }
      }),
      catchError((err) => {
        throw new Error(err.message);
      }));
  }
}
