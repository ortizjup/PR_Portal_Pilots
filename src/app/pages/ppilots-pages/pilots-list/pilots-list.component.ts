import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {IPilots} from "../../../api/models/i-pilots";
import {BsModalRef, BsModalService, ModalDirective} from "ngx-bootstrap";
import {PilotModalComponent} from "./pilot-modal/pilot-modal.component";
import {promise} from "selenium-webdriver";
import checkedNodeCall = promise.checkedNodeCall;
declare var jQuery:any;
declare var $:any;
declare var swal: any;

@Component({
  selector: 'app-pilots-list',
  templateUrl: './pilots-list.component.html',
  styleUrls: ['./pilots-list.component.css']
})
export class PilotsListComponent implements OnInit {
  pilotList: Array<IPilots> = [];
  modalRef: BsModalRef;
  @ViewChild('popupPilotComponent')
  popupPilotComponent: PilotModalComponent;
  @ViewChild('popupPilotModal')
  popupPilotModal: ModalDirective;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this.stupData();
  }

  stupData(){
    this.pilotList = [
      {
        id: 1,
        nombre: "Eric",
        apellido: "Ortiz",
        dni: 54564564,
        ultimoSorteo: new Date("11/09/2018"),
        fechaAlta: new Date(),
        fechaModificacion: new Date("11/09/2018"),
        participaDealSorteo: true
      },{
        id: 2,
        nombre: "Gabriel",
        apellido: "Muñoz",
        dni: 12312313,
        ultimoSorteo: new Date("11/09/2018"),
        fechaAlta: new Date("10/05/2018"),
        fechaModificacion: null,
        participaDealSorteo: true

      },{
        id: 3,
        nombre: "Pablo",
        apellido: "Guerrazio",
        dni: 1112331332,
        ultimoSorteo: new Date("11/08/2018"),
        fechaAlta: new Date("10/04/2018"),
        fechaModificacion: null,
        participaDealSorteo: false
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
    console.log('Edit' + pilot);
    let title = ('Editar piloto: ' + pilot.nombre + ',' + pilot.apellido).toString();
    pilot.fechaModificacion = new Date();
    this.popupPilotComponent.setup(pilot, title);
    this.popupPilotModal.show();
  }

  altaPiloto(){
    this.popupPilotComponent.setup(<IPilots>{}, 'Alta de piloto')
    this.popupPilotModal.show();
  }

  save(pilot: IPilots){
    console.log(pilot);
    if(pilot.id == null || pilot.id == undefined){
      let counter = 0;
      this.pilotList.sort((value:IPilots) => value.id);
      this.pilotList.forEach((value: IPilots) => {
        counter++;
      });
      pilot.id = counter + 1;
      pilot.fechaAlta = new  Date();
      this.pilotList.push(pilot);
      counter = 0;
    }else{
      pilot.fechaModificacion = new Date();
      let index = this.pilotList.indexOf(this.pilotList.find((value: IPilots) => value.id == pilot.id));
      this.pilotList[index] = pilot;
    }
    this.popupPilotModal.hide();
  }

  changePatipaDeSoretos(pilot: IPilots, checkbox: HTMLInputElement){
    if(jQuery(checkbox).is(':checked')){
      console.log('checked')
      pilot.participaDealSorteo = true;
      let index = this.pilotList.indexOf(this.pilotList.find((value: IPilots) => value.id == pilot.id));
      this.pilotList[index] = pilot;
      console.log('checked' + this.pilotList[index].participaDealSorteo);
      console.log("-------------")
    }else if(!jQuery(checkbox).is(':checked')){
      console.log('not checked')
      pilot.participaDealSorteo = false;
      let index = this.pilotList.indexOf(this.pilotList.find((value: IPilots) => value.id == pilot.id));
      this.pilotList[index] = pilot;
      console.log(this.pilotList[index].participaDealSorteo);
      console.log('not checked' + this.pilotList[index].participaDealSorteo);
      console.log("-------------")
    }
  }

}
