import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageErrorComponent } from './page-error/page-error.component';
import { MusicCardComponent } from './music-card/music-card.component';



@NgModule({
  declarations: [
    PageErrorComponent,
    MusicCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PageErrorComponent,
    MusicCardComponent
  ]
})
export class GlobalComponentsModule { }
