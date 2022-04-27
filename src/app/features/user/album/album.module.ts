import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { AlbumRoutingModule } from './album-routing.module';
import { PageAlbumComponent } from './page-album/page-album.component';

// Services
import { AlbumService } from './services/album.service';

// Pipes
import { PipesModule } from 'src/app/shared/pipes/pipes.module';


@NgModule({
  declarations: [
    PageAlbumComponent
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    SharedModule,
    PipesModule
  ],
  providers: [
    AlbumService
  ]
})
export class AlbumModule { }
