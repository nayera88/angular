import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user={
    username:'',
    password:'',
  }
  constructor(public Service:ServiceService) { }
  SignIn(){
    this.Service.SignIn(this.user)
   .subscribe(
    response=>{console.log(response);},
    error=>{console.log(error); } );
  }

  ngOnInit(): void {
  }

}

