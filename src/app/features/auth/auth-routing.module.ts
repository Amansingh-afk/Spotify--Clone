import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { SignUpComponent } from './sign-up/sign-up.component'


const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'error', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
