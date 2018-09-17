import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomepageComponent} from "./homepage/homepage.component";
import {LayoutModule} from "../../layout/layout.module";
import {PpolotsPagesRoutingModule} from "./ppolots-pages-routing.module";
import { PilotsListComponent } from './pilots-list/pilots-list.component';
import { PilotModalComponent } from './pilots-list/pilot-modal/pilot-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import {FormsModule} from "@angular/forms";
import {UiSwitchModule} from "angular2-ui-switch";
import { ReportesComponent } from './reportes/reportes.component';


@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    PpolotsPagesRoutingModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  declarations: [HomepageComponent, PilotsListComponent, PilotModalComponent, ReportesComponent],
  entryComponents: [PilotModalComponent],
  exports: [HomepageComponent]
})
export class PpilotsPagesModule { }
