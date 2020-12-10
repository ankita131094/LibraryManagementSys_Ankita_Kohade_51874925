import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Users } from '../_model/users';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss']
})
export class RestComponent implements OnInit {

  users: Users[] = [];

  searchBooks: string;
  p: number = 1;

  add: string = "assets/images/add.jpg";



  getRecord(name) {
    alert(name);
  }

  constructor(public rs: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.rs.getUsers().subscribe((response) => {
      this.users = response;
    })


  }
}

