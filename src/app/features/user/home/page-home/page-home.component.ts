import { Component, OnInit } from '@angular/core';
// Models
import { NewReleasesItem } from '../models/new-releases-model';

// Services
import { NewReleasesService } from '../services/new-releases.service';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {
  public newReleases!: NewReleasesItem[];

  constructor(
    private newReleasesService: NewReleasesService,
    private globalService: GlobalService
    ) { /*empty*/ }

    ngOnInit(): void {
      this.getNewReleases();
    }
  
    // call service to get new releases from spotify
    public getNewReleases(): void {
      this.newReleasesService.getNewReleases().subscribe((data: any) => {
        this.newReleases = data;
        console.log('Data:', data);
      }, (err) => {
        console.log('Error:', err);
        console.error(err.message);
      }, () => {
        console.log('Complete!');
      });
    }
  
    // scroll to element
    public scrollTo(elementId: string): void {
      // document.getElementById(elementId).scrollIntoView();
    }
  
}
