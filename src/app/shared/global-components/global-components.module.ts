import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageErrorComponent } from './page-error/page-error.component';
import { MusicCardComponent } from './music-card/music-card.component';
import { PlayBarComponent } from './play-bar/play-bar.component';
import { PageAlbumComponent } from './page-album/page-album.component';



@NgModule({
  declarations: [
    PageErrorComponent,
    MusicCardComponent,
    PlayBarComponent,
    PageAlbumComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PageErrorComponent,
    MusicCardComponent,
    PlayBarComponent,
    PageAlbumComponent
  ]
})
export class GlobalComponentsModule { }
