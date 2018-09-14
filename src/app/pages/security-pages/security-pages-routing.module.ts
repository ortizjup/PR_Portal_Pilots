import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'login', component: LoginComponent,
  },

  {path: 'forgotPassword', component: ForgotPasswordComponent},
];

@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forChild(routes),]
  ],
  exports:[RouterModule],
  declarations: []
})
export class SecurityPagesRoutingModule { }
