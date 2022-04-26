import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchRoutingModule } from './search-routing.module';
import { PageSearchComponent } from './page-search/page-search.component';
import { SearchArtistItemComponent } from './page-search-components/search-artist-item/search-artist-item.component';
import { SearchTrackItemComponent } from './page-search-components/search-track-item/search-track-item.component';
import { SearchModalComponent } from './page-search-components/search-modal/search-modal.component';

import { SearchService } from './services/search.service';

// Pipes
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  declarations: [
    PageSearchComponent,
    SearchArtistItemComponent,
    SearchTrackItemComponent,
    SearchModalComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    PipesModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    SearchService,
  ]
})
export class SearchModule { }
