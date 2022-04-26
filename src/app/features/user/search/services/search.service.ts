import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Services
import { GlobalService } from 'src/app/shared/services/global.service';

// Models
import { APISearch } from '../models/search-model';

@Injectable() // service provided in module
export class SearchService {

  constructor(private globalService: GlobalService) { /*empty*/ }

  // get both tracks and artist from spotify
  public getTracksAndArtists(term: string): Observable<APISearch[]> {
    const searchUrl: string = `search?q=${ term }&type=track%2Cartist`;

    return this.globalService.getQuery(searchUrl).pipe(
      map((res: APISearch[]) => {
        if (!res) {
          throw new Error('Value expected!');
        } else {          
          console.log('res:', res);
          return res;
        }
      }),
      catchError((err) => {
        throw new Error(err.message);
      }));
  }
}
