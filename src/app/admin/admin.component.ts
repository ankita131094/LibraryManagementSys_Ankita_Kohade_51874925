import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  add: string ="assets/images/add.jpg";
  delete: string ="assets/images/delete.png";
 
  constructor() { }

  ngOnInit(): void {
  }

}
