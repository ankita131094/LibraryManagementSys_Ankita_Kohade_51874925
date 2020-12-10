import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  home1: string ="assets/images/home1.jpg";
 

  constructor() { }

  ngOnInit(): void {
  }

}
