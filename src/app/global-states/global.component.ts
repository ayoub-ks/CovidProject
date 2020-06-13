import { Component, OnInit } from '@angular/core';
import { FserviceService } from '../fservice.service';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css'],
})
export class GlobalStates implements OnInit {
  //Variables
  isFetch = true;
  error = null;
  totalConfirmed = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  date: string[];
  golbalData: any;

  constructor(private corona: FserviceService) {
    this.ChargeData();
  }

  ChargeData() {
    this.corona.getCoronaSummary().subscribe(
      (data) => {
        this.golbalData = data;
        this.totalConfirmed = data.Global.TotalConfirmed;
        this.totalRecovered = data.Global.TotalRecovered;
        this.totalDeaths = data.Global.TotalRecovered;
        this.date = data.Date.split('T');
        this.date[1] = this.date[1].slice(0, this.date[1].length - 1);

        this.isFetch = false;
      },
      (error) => {
        this.error = error.message;
      }
    );
  }

  ngOnInit(): void {}
}
