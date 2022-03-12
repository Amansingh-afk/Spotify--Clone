import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentlyPlayedComponent } from './recently-played/recently-played.component';
import { HindiPartyComponent } from './hindi-party/hindi-party.component';
import { RecdTodayComponent } from './recd-today/recd-today.component';
import { JumpBackInComponent } from './jump-back-in/jump-back-in.component';
import { TodayHitComponent } from './today-hit/today-hit.component';



@NgModule({
  declarations: [
    RecentlyPlayedComponent,
    HindiPartyComponent,
    RecdTodayComponent,
    JumpBackInComponent,
    TodayHitComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CarouselModule { }
