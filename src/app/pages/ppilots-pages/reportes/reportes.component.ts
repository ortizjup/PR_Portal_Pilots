import { Component, OnInit } from '@angular/core';
import {IPilots} from '../../../api/models/i-pilots';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  pilotList: Array<IPilots> = []
  constructor() { }

  ngOnInit() {
  }

}
