import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Services
import { ArtistService } from '../services/artist.service';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-page-artist',
  templateUrl: './page-artist.component.html',
  styleUrls: ['./page-artist.component.scss']
})
export class PageArtistComponent implements OnInit {
  public artistId: string = '';
  public artist: any | null = null;
  public topTracks: any[] = [];
  public albums: any[] = [];
  public moreAlbums: boolean = false;
  public moreTracks: boolean = false;

  constructor( private activatedRoute: ActivatedRoute, private artistService: ArtistService ) { /*empty*/ }

  ngOnInit(): void {
    this.getActivatedRoute();
    this.getArtist();
    this.getTopTracks();
    this.getAlbums();
  }

  // get artist id from active route
  public getActivatedRoute(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.artistId = params['id'];
      console.log('Activated Route Id', params['id']);
    });
  }

  // get artist info
  public getArtist(): void {
    this.artistService.getArtist(this.artistId).subscribe((artist: any) => {
      this.artist = artist;
      console.log('Artist Data:', artist);
    }, (err) => {
      console.log('Artist Error:', err);
      console.error(err.message);
    }, () => {
      console.log('Artist Complete!');
    });
  }

  // get artist top tracks
  public getTopTracks(): void {
    this.artistService.getTopTracks(this.artistId).subscribe((topTracks: any) => {
      this.topTracks = topTracks;
      console.log('Top tracks Data:', topTracks);
    }, (err) => {
      console.log('Artist Error:', err);
      console.error(err.message);
    }, () => {
      console.log('Artist Complete!');
    });
  }

  // get artist albums
  public getAlbums(): void {
    this.artistService.getAlbums(this.artistId).subscribe((albums: any) => {
      this.albums = albums;
      console.log('Albums Data:', albums);
    }, (err) => {
      console.log('Albums Error:', err);
      console.error(err.message);
    }, () => {
      console.log('Albums Complete!');
    });
  }

  // update variable to see more/less albums
  public seeMoreAlbums(): void {
    this.moreAlbums = !this.moreAlbums;
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

