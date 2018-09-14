import { Component, OnInit } from '@angular/core';
import {IForgotPassword} from "../../../api/models/iforgot-password";
import {ActivatedRoute, Router} from "@angular/router";
declare var swal: any;

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordModel: IForgotPassword = <IForgotPassword>{};

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  resetPassword(isValid) {
    if (isValid) {
      console.log("Sending Reset Password Email....");
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });
    }
  }

}
