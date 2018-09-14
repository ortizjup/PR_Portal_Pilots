import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin: boolean = false;

  firsName: string;

  lastName: string;

  isIn: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.isIn = true;
  }

  logout(){

  }

  toggleState() { // click handler
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
    this.router.navigate(['/login']);
  }
}
