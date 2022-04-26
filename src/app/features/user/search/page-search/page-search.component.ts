import { Component, OnInit, Input } from '@angular/core';
// Services
import { SearchService } from '../services/search.service';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';
@Component({
  selector: 'app-page-search',
  templateUrl: './page-search.component.html',
  styleUrls: ['./page-search.component.scss']
})
export class PageSearchComponent implements OnInit {
  @Input() public showModal: boolean = false;

  public artistsList: any[] = [];
  public tracksList: any[] = [];
  public moreArtists: boolean = false;
  public moreTracks: boolean = false;
  // public activeLanguage: string = 'en';
  num : number | any = 10;
  
  constructor( private searchService: SearchService, private router: Router ) { /*empty*/ }

  ngOnInit(): void { /*empty*/ }

  // search both artist and track
  public search(term: string): void {
    console.log('Term to find:', term);

    // update url with term
    this.router.navigate(['search', term]);

    this.searchService.getTracksAndArtists(term).subscribe((data: any) => {
      this.artistsList = data.artists.items;
      this.tracksList = data.tracks.items;

      console.log('Data:', data);

      if (this.artistsList.length === 0 && this.tracksList.length === 0) {
        this.showModal = true;
      }

    }, (err) => {
      console.log('Error:', err);
      console.error(err.message);
    }, () => {
      console.log('Complete!');
    });
  }

  // update variable to see more/less artists
  public seeMoreArtists(): void {
    this.moreArtists = !this.moreArtists;
  }

  // update variable to see more/less tracks
  public seeMoreTracks(): void {
    this.moreTracks = !this.moreTracks;
  }

  // scroll to element
  public scrollTo(elementId: string): void {
    // document.getElementById(elementId).scrollIntoView();
  }

}
