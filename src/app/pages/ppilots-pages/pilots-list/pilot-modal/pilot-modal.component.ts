import { Component, OnInit } from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'app-pilot-modal',
  templateUrl: './pilot-modal.component.html',
  styleUrls: ['./pilot-modal.component.css']
})
export class PilotModalComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }


}
