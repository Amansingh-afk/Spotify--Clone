import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeLayoutComponent } from 'src/app/shared/layout/layout-structures/page-home-layout/page-home-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PageHomeLayoutComponent,
    children: [
      { path: "", redirectTo: "home" },
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
