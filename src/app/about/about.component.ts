import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

declare const testOne: any;
declare const showCards: any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent implements OnInit {
  //images
  slide1: String = 'assets/img/slide1.jpg';
  slide2: String = 'assets/img/slide2.jpg';
  slide3: String = 'assets/img/slide3.jpg';
  slide4: String = 'assets/img/slide4.jpg';

  //colum section
  corona1: String = 'assets/img/corona1.png';
  corona2: String = 'assets/img/corona2.jpg';

  //img of the 6 things
  covid: String = 'assets/img/bck0.jpg';
  covid1: String = 'assets/img/bck1.jpg';
  covid11: String = 'assets/img/bck2.jpg';
  covid111: String = 'assets/img/bck3.jpg';
  covid1111: String = 'assets/img/bck4.jpg';
  covid11111: String = 'assets/img/bck5.jpg';
  covid2: String = 'assets/img/covid2.jpg';
  covid3: String = 'assets/img/covid3.jpg';

  constructor() {}

  ngOnInit(): void {}

  methodOne() {
    testOne();
  }
  onClick() {
    showCards();
  }
}
