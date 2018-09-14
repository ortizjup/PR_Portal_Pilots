import { Component, OnInit } from '@angular/core';
import {IUser} from "../../../api/models/i-user";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
declare var swal: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userModel: IUser = <IUser>{};
  constructor(private router: Router){}

  ngOnInit() {
  }

  login(isValid: boolean){
    console.log('LLego');
    console.log(this.userModel);
    if(isValid){
      if(this.userModel.password == "Minguito"
         && this.userModel.userName == "ortizjup"){
        swal({
          type: 'success',
          title: 'Bienvenido!',
          text: 'Redireccionando...!',
          timer: 1500
        }).catch(swal.noop);
        this.router.navigate(['/portal-pilots-portal']);
        console.log('Navigate');
      }else{
        swal({
           type: 'error',
           title: 'Fallo login',
           text: 'Contraseña o usuario erroneo!',
        });
      };
    }
  }
}
