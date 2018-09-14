import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomepageComponent} from "./homepage/homepage.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: 'portal-pilots-portal', component: HomepageComponent,}
];

@NgModule({
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class PpolotsPagesRoutingModule { }
