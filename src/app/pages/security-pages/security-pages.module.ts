import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {SecurityPagesRoutingModule} from "./security-pages-routing.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SecurityPagesRoutingModule
  ],
  exports: [LoginComponent, ForgotPasswordComponent],
  declarations: [LoginComponent, ForgotPasswordComponent]
})
export class SecurityPagesModule { }
