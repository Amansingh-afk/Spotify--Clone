import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageArtistComponent } from './page-artist/page-artist.component';

const routes: Routes = [
  { path: '', component: PageArtistComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule { }
