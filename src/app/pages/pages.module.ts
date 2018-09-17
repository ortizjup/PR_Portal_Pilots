import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SecurityPagesModule} from "./security-pages/security-pages.module";
import {PpilotsPagesModule} from "./ppilots-pages/ppilots-pages.module";
import {FormsModule} from "@angular/forms";
import {SecurityPagesRoutingModule} from "./security-pages/security-pages-routing.module";
import {PpolotsPagesRoutingModule} from "./ppilots-pages/ppolots-pages-routing.module";
import {UiSwitchModule} from "angular2-ui-switch";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SecurityPagesModule,
    SecurityPagesRoutingModule,
    PpilotsPagesModule,
    PpolotsPagesRoutingModule

  ],
  declarations: [],
  exports: [SecurityPagesModule,PpilotsPagesModule]
})
export class PagesModule { }
