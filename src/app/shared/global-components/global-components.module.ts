import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageErrorComponent } from './page-error/page-error.component';
import { MusicCardComponent } from './music-card/music-card.component';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [
    PageErrorComponent,
    MusicCardComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PageErrorComponent,
    MusicCardComponent,
    BannerComponent
  ]
})
export class GlobalComponentsModule { }
