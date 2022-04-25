import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { AlbumRoutingModule } from './album-routing.module';
import { PageAlbumComponent } from './page-album/page-album.component';


@NgModule({
  declarations: [
    PageAlbumComponent
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    SharedModule
  ]
})
export class AlbumModule { }
