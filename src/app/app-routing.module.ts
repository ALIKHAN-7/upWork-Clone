import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinComponent } from './join/join.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { EnterprisesComponent } from './enterprises/enterprises.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'join',component:JoinComponent},
  {path:'signup',component:SignupComponent},
  {path:'enterprises',component:EnterprisesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
