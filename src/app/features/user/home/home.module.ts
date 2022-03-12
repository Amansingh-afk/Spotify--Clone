import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { PageHomeComponent } from './page-home/page-home.component';



@NgModule({
  declarations: [
    PageHomeComponent
  ],
  imports: [
    CommonModule, 
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
