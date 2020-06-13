import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  //img in footer tag
  logo: String = 'assets/img/logo1.png';

  constructor() {}

  ngOnInit(): void {}
}
