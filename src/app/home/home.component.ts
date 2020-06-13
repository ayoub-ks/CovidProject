import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  img1: String = 'assets/img/stats.png';
  img2: String = 'assets/img/back.png';

  constructor() {}

  ngOnInit(): void {}
}
