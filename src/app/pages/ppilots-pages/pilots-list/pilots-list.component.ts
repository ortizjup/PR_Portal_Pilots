import {Component, OnInit, TemplateRef} from '@angular/core';
import {IPilots} from "../../../api/models/i-pilots";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {PilotModalComponent} from "./pilot-modal/pilot-modal.component";
declare var swal: any;

@Component({
  selector: 'app-pilots-list',
  templateUrl: './pilots-list.component.html',
  styleUrls: ['./pilots-list.component.css']
})
export class PilotsListComponent implements OnInit {
  pilotList: Array<IPilots> = [];
  modalRef: BsModalRef;
  modalRef2: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this.pilotList = [
      {
        id: 1,
        nombre: "Eric",
        apellido: "Ortiz",
        dni: 54564564,
        ultimoSorteo: new Date("11/09/2018")
      },{
        id: 2,
        nombre: "Gabriel",
        apellido: "Muñoz",
        dni: 12312313,
        ultimoSorteo: new Date("11/09/2018")
      },{
        id: 3,
        nombre: "Pablo",
        apellido: "Guerrazio",
        dni: 1112331332,
        ultimoSorteo: new Date("11/08/2018")
      },
    ]
  }

  removePilitoFromList(pilot: IPilots){
    if(pilot != null){
      this.pilotList.splice(this.pilotList.indexOf(pilot), 1);
    }
  }

  deletePilot(pilot: IPilots){
    swal({
      title: 'Esta seguro?',
      text: "No va a poder revertir el cambio!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      this.removePilitoFromList(pilot);
      if (result.value) {
          swal({
            title: 'Eliminado!',
            text: 'El piloto ha sido eliminado de la nomina.',
            type: 'success'
          });
      } else if (
        // Read more about handling dismissals
        result.dismiss === swal.DismissReason.cancel
      ) {
        swal({
          title: 'Operacion cancelada',
          text: 'El piloto permanece en la nomina.',
          type: 'error'
        });

      }
    });
  }

  editoPilotInfo(pilot: IPilots){
    this.modalRef = this.modalService.show(PilotModalComponent, {
      class: 'modal-lg'
    });
  }

}
