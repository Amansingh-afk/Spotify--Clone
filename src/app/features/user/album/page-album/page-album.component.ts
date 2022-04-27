import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// Services
import { AlbumService } from '../services/album.service';

// Models
import { APIAlbums } from '../models/album-model';
@Component({
  selector: 'app-page-album',
  templateUrl: './page-album.component.html',
  styleUrls: ['./page-album.component.scss']
})
export class PageAlbumComponent implements OnInit {
  public albumId: string = '';
  public album: APIAlbums | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private albumService: AlbumService,
    private location: Location,
    ) { /*empty*/ }

  ngOnInit(): void {
    this.getActivatedRoute();
    this.getAlbum();
  }
  // get album id from active route
  public getActivatedRoute(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.albumId = params['id'];
      console.log('Activated Route Id', params['id']);
    });
  }

  // get album info
  public getAlbum(): void {
    this.albumService.getAlbum(this.albumId).subscribe((album: APIAlbums) => {
      this.album = album;
      console.log('Album Data:', album);
    }, (err) => {
      console.log('Album Error:', err);
      console.error(err.message);
    }, () => {
      console.log('Album Complete!');
    });
  }

  // go back to the previous URL
  public goBack(): void {
    this.location.back();
  }

}
