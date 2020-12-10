import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  libraray: string ="assets/images/libarary.png";
  home: string ="assets/images/home.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
