import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { PageHomeComponent } from './page-home/page-home.component';
import { RecentlyPlayedComponent } from './page-home-components/recently-played/recently-played.component';
import { TodaysHitComponent } from './page-home-components/todays-hit/todays-hit.component';
import { HindiPartyComponent } from './page-home-components/hindi-party/hindi-party.component';



@NgModule({
  declarations: [
    PageHomeComponent,
    RecentlyPlayedComponent,
    TodaysHitComponent,
    HindiPartyComponent
  ],
  imports: [
    CommonModule, 
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
