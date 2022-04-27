import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

import { ArtistRoutingModule } from './artist-routing.module';
import { PageArtistComponent } from './page-artist/page-artist.component';
import { ArtistAlbumsComponent } from './page-artist-components/artist-albums/artist-albums.component';
import { ArtistTopTrackComponent } from './page-artist-components/artist-top-track/artist-top-track.component';

import { ArtistService } from './services/artist.service';

@NgModule({
  declarations: [
    PageArtistComponent,
    ArtistAlbumsComponent,
    ArtistTopTrackComponent
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    HttpClientModule,
    PipesModule
  ],
  providers: [
    ArtistService
  ]
})
export class ArtistModule { }
