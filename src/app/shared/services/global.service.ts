import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APISearch } from 'src/app/features/user/search/models/search-model';

@Injectable() // provide service in module
export class GlobalService {
  client_id = 'b8d41e698f964693a61045bc7871cdd2';
  client_secret = 'd3db56cd9ebc48e6b9cf51dad644b105';
  constructor(private http: HttpClient) { /*empty*/ }

  public getQuery(query: string) {
    // define common url
    const url: string = `https://api.spotify.com/v1/${query}`;

    // define header to specify token
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCUvGckOPg7B_B8KibRNqg7IcJWlUI_E6m7W5YXMjy82L-1Iuk8b_ZorjMIKHQb7tpSDMpWRs4A2XJ03MEGPJnaSbcjJnKoCLpWNd-9LcJKtXtH0TskJKEsPmzYYH8pBxSiVYZlv52N_OMQrTBMNDNEeCGOIPYs9o8'
    });

    // execute request
    return this.http.get<APISearch[]>(url, { headers });
  }
}
