import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageErrorComponent } from './page-error/page-error.component';
import { MusicCardComponent } from './music-card/music-card.component';
import { PlayBarComponent } from './play-bar/play-bar.component';



@NgModule({
  declarations: [
    PageErrorComponent,
    MusicCardComponent,
    PlayBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PageErrorComponent,
    MusicCardComponent,
    PlayBarComponent
  ]
})
export class GlobalComponentsModule { }
