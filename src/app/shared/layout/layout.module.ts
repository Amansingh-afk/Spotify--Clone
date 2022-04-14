import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GlobalComponentsModule } from '../global-components/global-components.module'

import { DashboardComponent } from './layout-components/dashboard/dashboard.component';
import { HomeHeaderComponent } from './layout-components/home-header/home-header.component';
import { SearchHeaderComponent } from './layout-components/search-header/search-header.component';
import { LibraryHeaderComponent } from './layout-components/library-header/library-header.component';
import { PageHomeLayoutComponent } from './layout-structures/page-home-layout/page-home-layout.component';
import { PageSearchLayoutComponent } from './layout-structures/page-search-layout/page-search-layout.component';
import { PageLibraryLayoutComponent } from './layout-structures/page-library-layout/page-library-layout.component';



@NgModule({
  declarations: [
    DashboardComponent,
    HomeHeaderComponent,
    SearchHeaderComponent,
    LibraryHeaderComponent,
    PageHomeLayoutComponent,
    PageSearchLayoutComponent,
    PageLibraryLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GlobalComponentsModule

  ],
  exports: [
    PageHomeLayoutComponent,
    PageSearchLayoutComponent,
    PageLibraryLayoutComponent
  ]
})
export class LayoutModule { }
