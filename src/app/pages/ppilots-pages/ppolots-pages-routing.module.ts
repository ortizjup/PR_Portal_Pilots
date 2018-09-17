import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomepageComponent} from "./homepage/homepage.component";
import {RouterModule, Routes} from "@angular/router";
import {PilotModalComponent} from "./pilots-list/pilot-modal/pilot-modal.component";
import {ReportesComponent} from "./reportes/reportes.component";

const routes: Routes = [
  {path: 'portal-pilots-portal', component: HomepageComponent,
    children: [
      {path: 'reportes', component: ReportesComponent}
    ]
  }
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
