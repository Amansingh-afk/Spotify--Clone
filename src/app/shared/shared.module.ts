import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { GlobalComponentsModule } from './global-components/global-components.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    LayoutModule,
    GlobalComponentsModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    LayoutModule,
    GlobalComponentsModule
  ]
})
export class SharedModule { }
