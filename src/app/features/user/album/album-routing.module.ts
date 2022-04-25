import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAlbumComponent } from './page-album/page-album.component';

const routes: Routes = [
  {
    path: '', component: PageAlbumComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
