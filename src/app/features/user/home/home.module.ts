import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { GlobalComponentsModule } from 'src/app/shared/global-components/global-components.module';
import { HomeRoutingModule } from './home-routing.module';
import { PageHomeComponent } from './page-home/page-home.component';
import { RecentlyPlayedComponent } from './page-home-components/recently-played/recently-played.component';
import { TodaysHitComponent } from './page-home-components/todays-hit/todays-hit.component';
import { HindiPartyComponent } from './page-home-components/hindi-party/hindi-party.component';
import { HomeBannerComponent } from './page-home-components/home-banner/home-banner.component';
import { TestComponent } from './page-home-components/test/test.component';
import { PopularAlbumComponent } from './page-home-components/popular-album/popular-album.component';
import { NewMusicComponent } from './page-home-components/new-music/new-music.component';
import { RecommendedComponent } from './page-home-components/recommended/recommended.component';
import { NewReleaseItemComponent } from './page-home-components/new-release-item/new-release-item.component';

// Services
import { NewReleasesService } from './services/new-releases.service';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';


@NgModule({
  declarations: [
    PageHomeComponent,
    RecentlyPlayedComponent,
    TodaysHitComponent,
    HindiPartyComponent,
    HomeBannerComponent,
    TestComponent,
    PopularAlbumComponent,
    NewMusicComponent,
    RecommendedComponent,
    NewReleaseItemComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    SharedModule,
    GlobalComponentsModule,
    PipesModule
  ],
  providers: [
    NewReleasesService,
  ]
})
export class HomeModule { }
