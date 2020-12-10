import { Component, OnInit } from '@angular/core';
import { User } from '../Model/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  libraray: string ="assets/images/libarary.png";

  userModel: User = {  
    email: '',  
    password: '',  
     
  };

  constructor(private router : Router) { }


  ngOnInit(): void {
  }

  onSubmitAdmin(){
    if(this.userModel.email == "admin@gmail.com" && this.userModel.password == "Admin123@" )

    {
      this.router.navigate(['/admin'])
    }
    else{
      alert("Please Enter Valid Details");
    }
  }

  onSubmitMem(){
    if  (this.userModel.email == "ritika@gmail.com" && this.userModel.password == "Ritika123@"
      || this.userModel.email == "samina@gmail.com" && this.userModel.password == "Samina123@"
      || this.userModel.email == "ankita@gmail.com" && this.userModel.password == "Ankita123@"
      || this.userModel.email == "jayati@gmail.com" && this.userModel.password == "Jayati123@"
      || this.userModel.email == "diya@gmail.com" && this.userModel.password == "Diya123@")
      {​​​​​
       this.router.navigate(['/home']);
      }​​​​​

}

}
