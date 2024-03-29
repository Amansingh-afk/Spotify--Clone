import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GlobalComponentsModule } from '../global-components/global-components.module'

import { DashboardComponent } from './layout-components/dashboard/dashboard.component';
import { HomeHeaderComponent } from './layout-components/home-header/home-header.component';
import { PageHomeLayoutComponent } from './layout-structures/page-home-layout/page-home-layout.component';
import { PageSearchLayoutComponent } from './layout-structures/page-search-layout/page-search-layout.component';
import { PageLibraryLayoutComponent } from './layout-structures/page-library-layout/page-library-layout.component';
import { PageAlbumLayoutComponent } from './layout-structures/page-album-layout/page-album-layout.component';



@NgModule({
  declarations: [
    DashboardComponent,
    HomeHeaderComponent,
    PageHomeLayoutComponent,
    PageSearchLayoutComponent,
    PageLibraryLayoutComponent,
    PageAlbumLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GlobalComponentsModule

  ],
  exports: [
    PageHomeLayoutComponent,
    PageSearchLayoutComponent,
    PageLibraryLayoutComponent,
    PageAlbumLayoutComponent

  ]
})
export class LayoutModule { }
