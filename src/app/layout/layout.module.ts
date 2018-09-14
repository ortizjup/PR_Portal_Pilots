import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./navbar/navbar.component";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([]),
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class LayoutModule { }
