import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {IPilots} from "../../../../api/models/i-pilots";
declare var swal: any;
@Component({
  selector: 'app-pilot-modal',
  templateUrl: './pilot-modal.component.html',
  styleUrls: ['./pilot-modal.component.css']
})
export class PilotModalComponent implements OnInit {
  title: string;
  pilot: IPilots = <IPilots>{};
  @Output()
  save: EventEmitter<IPilots> = new EventEmitter<IPilots>();
  @Output()
  cancel = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  guardar(isValid: boolean){
    if(isValid){
      swal({
        type: 'success',
        title: 'Datos guardados!',
        text: 'Plito agregado a la nomina!',
        timer: 1500
      }).catch(swal.noop);
      this.save.emit(this.pilot);
    }
  }

  setup(pilot: IPilots, title: string){
    this.title = title;
    this.pilot = Object.assign({}, pilot);
  }

  close(){
    this.pilot = <IPilots>{};
    this.cancel.emit();
  }
}
