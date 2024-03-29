import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeLayoutComponent } from 'src/app/shared/layout/layout-structures/page-home-layout/page-home-layout.component';
import { PageSearchLayoutComponent } from 'src/app/shared/layout/layout-structures/page-search-layout/page-search-layout.component';
import { PageLibraryLayoutComponent } from 'src/app/shared/layout/layout-structures/page-library-layout/page-library-layout.component'
import { PageAlbumLayoutComponent } from 'src/app/shared/layout/layout-structures/page-album-layout/page-album-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PageHomeLayoutComponent,
    children: [
      { path: "", redirectTo: "home" },
      { 
        path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
      }
    ]
  },
  {
    path: '',
    component: PageSearchLayoutComponent,
    children: [
      {
        path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
      }
    ]
  },
  {
    path: '',
    component: PageLibraryLayoutComponent,
    children: [
      {
        path: 'library', loadChildren: () => import('./library/library.module').then(m => m.LibraryModule)
      }
    ]
  },
  {
    path: '',
    component: PageAlbumLayoutComponent,
    children: [
      {
        path: 'album/:id', loadChildren: () => import('./album/album.module').then(m => m.AlbumModule)
      }
    ]
  },{
    path: '',
    component: PageAlbumLayoutComponent,
    children: [
      {
        path: 'artist/:id', loadChildren: () => import('./artist/artist.module').then(m => m.ArtistModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
