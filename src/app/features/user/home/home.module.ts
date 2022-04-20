import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
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
    RecommendedComponent
  ],
  imports: [
    CommonModule, 
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
