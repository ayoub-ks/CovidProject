import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import { FserviceService } from '../fservice.service';

@Component({
  selector: 'app-coutries',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryStatesComponent implements OnInit {
  date: string[];
  countrySelected: boolean;
  countryName: string = '';
  actives: number;
  death: number;
  recovered: number;
  comfirmed: number;
  isFetch = false;
  error = null;
  constructor(private corona: FserviceService) {}

  ngOnInit() {
    this.countrySelected = false;
    let map = am4core.create('chartdiv', am4maps.MapChart);
    map.geodata = am4geodata_worldLow;
    map.projection = new am4maps.projections.Miller();
    let polygonSeries = new am4maps.MapPolygonSeries();
    polygonSeries.useGeodata = true;
    polygonSeries.exclude = ['AQ'];
    map.series.push(polygonSeries);
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.togglable = true;
    polygonTemplate.tooltipText = '{name}';
    polygonTemplate.fill = am4core.color('#312323');
    let hs = polygonTemplate.states.create('hover');
    hs.properties.fill = am4core.color('#921919');
    let ss = polygonTemplate.states.create('active');
    ss.properties.fill = am4core.color('#921919');
    let lastSelected;
    polygonTemplate.events.on('hit', function (ev) {
      if (lastSelected) {
        // This line serves multiple purposes:
        // 1. Clicking a country twice actually de-activates, the line below
        //    de-activates it in advance, so the toggle then re-activates, making it
        //    appear as if it was never de-activated to begin with.
        // 2. Previously activated countries should be de-activated.
        lastSelected.isActive = false;
      }

      ev.target.series.chart.zoomToMapObject(ev.target);

      if (lastSelected !== ev.target) {
        lastSelected = ev.target;
      }
    });

    polygonTemplate.events.on('hit', (ev) => {
      let Sname = (<any>ev.target.dataItem.dataContext).name;
      if (this.countryName !== Sname) {
        this.countryName = Sname;
        this.countrySelected = true;
        ev.target.isActive = false;
        this.isFetch = true;

        this.corona.getCoronaRealTimeData(Sname).subscribe(
          (data) => {
            this.error = null;
            var index = data.length - 1;

            this.comfirmed = data[index].Confirmed;
            this.death = data[index].Deaths;
            this.actives = data[index].Active;
            this.recovered = data[index].Recovered;
            this.date = data[index].Date.split('T');
            this.date[1] = this.date[1].slice(0, this.date[1].length - 1);

            this.isFetch = false;
          },
          (error) => {
            this.error = error.message;
          }
        );
      } else {
        this.countrySelected = false;
        this.countryName = '';
        ev.target.isActive = true;
      }
    });

    map.zoomControl = new am4maps.ZoomControl();

    let homeButton = new am4core.Button();
    homeButton.events.on('hit', () => {
      map.goHome();
      this.countrySelected = false;
    });

    homeButton.icon = new am4core.Sprite();
    homeButton.padding(7, 5, 7, 5);
    homeButton.width = 30;
    homeButton.icon.path =
      'M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8';
    homeButton.marginBottom = 10;
    homeButton.parent = map.zoomControl;
    homeButton.insertBefore(map.zoomControl.plusButton);
  }
}
